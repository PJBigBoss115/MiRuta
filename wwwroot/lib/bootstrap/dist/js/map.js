window.initMap = () => {
    const map = L.map('map').setView([14.6349, -90.5069], 13);

    const redIcon = L.AwesomeMarkers.icon({
        icon: 'fa-solid fa-bus',
        markerColor: 'red',
        prefix: 'fa'
    });

    const blackIcon = L.AwesomeMarkers.icon({
        icon: 'fa-solid fa-bus',
        markerColor: 'black',
        prefix: 'fa'
    });

    const yellowIcon = L.AwesomeMarkers.icon({
        icon: 'fa-solid fa-bus',
        markerColor: 'orange',
        prefix: 'fa'
    });

    const purpleIcon = L.AwesomeMarkers.icon({
        icon: 'fa-solid fa-bus',
        markerColor: 'purple',
        prefix: 'fa'
    });

    const blueIcon = L.AwesomeMarkers.icon({
        icon: 'fa-solid fa-bus',
        markerColor: 'blue',
        prefix: 'fa'
    });

    const linea_13 = [
        [14.570093922842975, -90.5264724637035],
        [14.574514388807655, -90.52417275536979], // Juan Plabo II
        [14.586107662099488, -90.52253179561697] // Plaza Agentina
    ];

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([14.646013056080472, -90.5130632008191], { icon: purpleIcon }).addTo(map)
        .bindPopup('Linea 1')
        .openPopup();
    L.marker([14.570093922842975, -90.5264724637035], { icon: blackIcon }).addTo(map)
        .bindPopup('Linea 13')
        .openPopup();
    L.marker([14.564940626809063, -90.56369730753475], { icon: redIcon }).addTo(map)
        .bindPopup('Linea 12')
        .openPopup();
    L.marker([14.64995744121292, -90.47818590123329], { icon: blueIcon }).addTo(map)
        .bindPopup('Linea 18')
        .openPopup();
    L.marker([14.675082877235283, -90.48723954136041], { icon: yellowIcon }).addTo(map)
        .bindPopup('Linea 6')
        .openPopup();

    // Rutas

    L.polyline(linea_13, { color: 'black' }).addTo(map);

};
