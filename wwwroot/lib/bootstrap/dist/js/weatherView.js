class WeatherManager {
    constructor() {
        this.defaultCity = "Guatemala City";
        this.isInitialized = false;
        this.updateInterval = 1800000; // <--- 30 minutos por las peticiones xdxd
        
        this.waitForBlazor().then(() => {
            this.initializeWeather();
        });
    }

    async waitForBlazor() {
        while (!window.WeatherBridge) {
            await new Promise(resolve => setTimeout(resolve, 100));
        }
        this.isInitialized = true;
    }

    async initializeWeather() {
        if (this.isInitialized) {
            await this.loadWeather(this.defaultCity);

            setInterval(() => {
                this.loadWeather(this.defaultCity);
            }, this.updateInterval);
        }
    }

    async loadWeather(city) {
        const loading = document.getElementById('weatherLoading');
        const content = document.getElementById('weatherContent');
        const error = document.getElementById('weatherError');

        if (!loading || !content || !error) {
            console.error('Weather elements not found');
            return;
        }

        try {
            loading.classList.remove('d-none');
            content.classList.add('d-none');
            error.classList.add('d-none');

            if (!window.WeatherBridge || !window.WeatherBridge.getWeather) {
                throw new Error('Blazor component not ready');
            }

            const weatherData = await window.WeatherBridge.getWeather(city);
            
            if (weatherData) {
                this.updateWeatherUI(weatherData);
                loading.classList.add('d-none');
                content.classList.remove('d-none');
            } else {
                throw new Error('No se pudo obtener datos del clima');
            }
        } catch (err) {
            console.error('Error loading weather:', err);
            loading.classList.add('d-none');
            error.classList.remove('d-none');
        }
    }

    updateWeatherUI(data) {
        if (!data || !data.main || !data.weather || !data.weather[0]) {
            console.error('Invalid weather data structure:', data);
            return;
        }

        const cityElement = document.getElementById('weatherCity');
        const tempElement = document.getElementById('weatherTemp');
        const descElement = document.getElementById('weatherDescription');
        const humidityElement = document.getElementById('weatherHumidity');
        const windElement = document.getElementById('weatherWind');
        const iconElement = document.getElementById('weatherIcon');

        if (cityElement) cityElement.textContent = data.name || 'Ciudad no disponible';
        if (tempElement) tempElement.textContent = `${Math.round(data.main.temp)}°C`;
        if (descElement) descElement.textContent = this.capitalizeFirstLetter(data.weather[0].description);
        if (humidityElement) humidityElement.textContent = `${data.main.humidity}%`;
        if (windElement) windElement.textContent = `${data.wind.speed} m/s`;
        
        if (iconElement && data.weather[0].icon) {
            const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            iconElement.src = iconUrl;
        }
    }

    capitalizeFirstLetter(string) {
        return string ? string.charAt(0).toUpperCase() + string.slice(1) : '';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        window.weatherManager = new WeatherManager();
    }, 1000);
});
