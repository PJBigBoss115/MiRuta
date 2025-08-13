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

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Inicio Final de Rutas
    L.marker([14.646013056080472, -90.5130632008191], { icon: purpleIcon }).addTo(map)
        .bindPopup('Linea 1')
        .openPopup();
    L.marker([14.675082877235283, -90.48723954136041], { icon: yellowIcon }).addTo(map)
        .bindPopup('Linea 6')
        .openPopup();
    L.marker([14.564940626809063, -90.56369730753475], { icon: redIcon }).addTo(map)
        .bindPopup('Linea 12')
        .openPopup();
    L.marker([14.570093922842975, -90.5264724637035], { icon: blackIcon }).addTo(map)
        .bindPopup('Linea 13')
        .openPopup();
    L.marker([14.64995744121292, -90.47818590123329], { icon: blueIcon }).addTo(map)
        .bindPopup('Linea 18')
        .openPopup();

    // Paradas de cada Ruta

    // Linea 1
    const estacionesLinea_1 = [
        { nombre: "MERCADO CENTRAL", coords: [14.642875389674943, -90.51145473105088] },
        { nombre: "PARQUE CENTENARIO", coords: [14.642082360743748, -90.51476232601512] },
        { nombre: "SAN AGUSTÍN", coords: [14.638483668012178, -90.5152453421232] },
        { nombre: "CORREOS", coords: [14.637125330287653, -90.5122138791315] },
        { nombre: "GÓMEZ CARRILLO", coords: [14.634521184461047, -90.51578773832803] },
        { nombre: "BEATAS DE BELÉN", coords: [14.633871072243343, -90.51268453466429] },
        { nombre: "SUR 2", coords: [14.631383093211655, -90.51629599070989] },
        { nombre: "PASEO DE LAS LETRAS", coords: [14.629688476422709, -90.5131700481722] },
        { nombre: "CENTRO CÍVICO", coords: [14.627862665619753, -90.51481755845931] }
    ];

    estacionesLinea_1.forEach(estacion => {
        L.circle(estacion.coords, {
            color: 'purple',
            fillColor: 'rgba(72, 41, 129, 1)',
            fillOpacity: 0.5,
            radius: 15
        }).addTo(map).bindPopup(estacion.nombre);
    });

    // Linea 2
    const estacionesLinea_2 = [
        { nombre: "HIPÓDROMO DEL NORTE", coords: [14.659551484872592, -90.50965492464809] }, // Comparte con estacion 2
        { nombre: "SIMEÓN CAÑAS", coords: [14.653979299046325, -90.51187935244896] },
        { nombre: "SAN JOSÉ DE LA MONTAÑA", coords: [14.653892158455921, -90.51194553108871] },
        { nombre: "JOCOTENANGO", coords: [14.651333630031237, -90.51315876873812] },
        { nombre: "SAN SEBASTIÁN", coords: [14.645898440493992, -90.51306223939763] }
    ];

    estacionesLinea_2.forEach(estacion => {
        L.circle(estacion.coords, {
            color: 'skyblue',
            fillColor: 'rgba(31, 99, 177, 1)',
            fillOpacity: 0.5,
            radius: 15
        }).addTo(map).bindPopup(estacion.nombre);
    });

    // Linea 6
    const estacionesLinea_6 = [
        { nombre: "PROYECTOS", coords: [14.673202081768798, -90.48745869942127] },
        { nombre: "PROYECTOS 4-4", coords: [14.66791760154767, -90.49195925981476] },
        { nombre: "CIPRESALES", coords: [14.665373027169508, -90.49379507704836] },
        { nombre: "", coords: [] },
        { nombre: "", coords: [] }
    ];

    estacionesLinea_6.forEach(estacion => {
        L.circle(estacion.coords, {
            color: 'yellow',
            fillColor: 'rgba(109, 195, 39, 1)',
            fillOpacity: 0.5,
            radius: 15
        }).addTo(map).bindPopup(estacion.nombre);
    });

    // Linea 12
    const estacionesLinea_12 = [
        { nombre: "PLAZA MUNICIPAL", coords: [14.627718809555313, -90.51597349661792] },
        { nombre: "EL CALVARIO", coords: [14.630468754377839, -90.5156118418722] }, // Comparte con 13 // Trasbordo
        { nombre: "PLAZA BARRIOS", coords: [14.63034172418171, -90.5122370616107] }, // Comparte con Todas // Trasbordo
        { nombre: "PLAZA EL AMATE", coords: [14.631423875884884, -90.51684270393828] },
        { nombre: "DON BOSCO", coords: [14.625327279506639, -90.52213961118319] },
        { nombre: "BOLÍVAR", coords: [14.619289878594856, -90.52778151742984] },
        { nombre: "SANTA CECILIA", coords: [14.614839710040531, -90.53329800579186] },
        { nombre: "TRÉBOL", coords: [14.612650444271841, -90.5360682209185] },
        { nombre: "MARISCAL", coords: [14.606000456659862, -90.54411421928343] },
        { nombre: "REFORMITA", coords: [14.602605894788518, -90.54799879070612] },
        { nombre: "EL CARMEN", coords: [14.596424892609022, -90.55551605536746] },
        { nombre: "LAS CHARCAS", coords: [14.59365935713764, -90.55847847695604] },
        { nombre: "JAVIER", coords: [14.587454994683853, -90.56263790393888] },
        { nombre: "MONTE MARÍA", coords: [14.580840251941645, -90.56794067510275] }
    ];

    estacionesLinea_12.forEach(estacion => {
        L.circle(estacion.coords, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 15
        }).addTo(map).bindPopup(estacion.nombre);
    });

    // Linea 13
    const estacionesLinea_13 = [
        { nombre: "JUAN PABLO II", coords: [14.574514388807655, -90.52417275536979] },
        { nombre: "PLAZA ARGENTINA", coords: [14.586107662099488, -90.52253179561697] }, // Trasbordo
        { nombre: "HANGARES", coords: [14.580281572283617, -90.52435516127956] }, // Trasbordo
        { nombre: "FUERZA AEREA", coords: [14.587260413079349, -90.52346960426804] },
        { nombre: "LOS ARCOS", coords: [14.592314586646681, -90.52076642346607] },
        { nombre: "ACUEDUCTO", coords: [14.593696069817364, -90.52171216491526] },
        { nombre: "PLAZA ESPAÑA", coords: [14.600270390267017, -90.51909312409312] },
        { nombre: "MONTÚFAR", coords: [14.600668256632241, -90.52075961127206] },
        { nombre: "IGSS ZONA 9", coords: [14.604324076360784, -90.51827401743003] },
        { nombre: "TÍVOLI", coords: [14.604657300720783, -90.52006276161106] },
        { nombre: "SEIS 26", coords: [14.609403834447376, -90.51738038420214] },
        { nombre: "INDUSTRIA", coords: [14.60956549700797, -90.51907516161098] },
        { nombre: "TORRE DEL REFORMADOR", coords: [14.614506701853331, -90.51641879044712] },
        { nombre: "TERMINAL", coords: [14.61380616605225, -90.51822781742993] },
        { nombre: "PLAZA DE LA REPÚBLICA", coords: [14.619747582329868, -90.5155473409713] },
        { nombre: "EXPOSICIÓN", coords: [14.619619371240667, -90.51721479567985] },
        { nombre: "BANCO DE GUATEMALA", coords: [14.626409852340048, -90.51464080393835] },
        { nombre: "4 GRADOS SUR", coords: [14.6246682979541, -90.51631280208495] }
    ];

    estacionesLinea_13.forEach(estacion => {
        L.circle(estacion.coords, {
            color: 'black',
            fillColor: 'rgba(59, 59, 59, 1)',
            fillOpacity: 0.5,
            radius: 15
        }).addTo(map).bindPopup(estacion.nombre);
    });

    // Linea 18
    const estacionesLinea_18 = [
        { nombre: "PARAÍSO", coords: [14.665774307316655, -90.44667566172043] },
        { nombre: "SAN RAFAEL", coords: [14.660447958905191, -90.45206556180254] },
        { nombre: "ATLÁNTIDA - SAN RAFAEL - PARAÍSO", coords: [14.651074087938827, -90.47799194591052]},
        { nombre: "ATLÁNTIDA", coords: [14.651076543076794, -90.47798846498144] },
        { nombre: "PORTALES", coords: [14.648742937266203, -90.48198681406106]},
        { nombre: "VICTORIAS", coords: [14.648455075747801, -90.493441262726] },
        { nombre: "SAN MÁRTIN - DIR. ATLÁNTIDA", coords: [14.645451667850791, -90.49676851108204] },
        { nombre: "COLÓN", coords: [14.640102363776897, -90.50820470430158] }, // Comparte con Linea 6
        { nombre: "CAPUCHINAS", coords: [14.63879176068916, -90.50989619769028] }, // Comparte con Linea 6
        { nombre: "FRANCOS MONROY", coords: [14.632805193504607, -90.50937346162024] }, // Comparte con Linea 6
        { nombre: "PLAZA BARRIOS / FEGUA", coords: [14.631031352018587, -90.51167083176213] } // Comparte con Linea 6
    ];

    estacionesLinea_18.forEach(estacion => {
        L.circle(estacion.coords, {
            color: 'blue',
            fillColor: 'rgba(162, 172, 220, 1)',
            fillOpacity: 0.5,
            radius: 15
        }).addTo(map).bindPopup(estacion.nombre);
    });

};
