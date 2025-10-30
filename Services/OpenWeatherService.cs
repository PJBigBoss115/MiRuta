using System.Net.Http.Json;
using MiRuta.Models;

public class OpenWeatherService
{
    private readonly HttpClient _httpClient;
    private const string ApiKey = "885bbb24a56aff5edb620275339312d1";
    private const string BaseUrl = "https://api.openweathermap.org/data/2.5";

    public OpenWeatherService(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    public async Task<WeatherResponse?> GetWeatherAsync(string city)
    {
        try
        {
            var url = $"{BaseUrl}/weather?q={city}&appid={ApiKey}&units=metric&lang=es";
            var response = await _httpClient.GetFromJsonAsync<WeatherResponse>(url);
            return response;
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error fetching weather: {ex.Message}");
            return null;
        }
    }
}
