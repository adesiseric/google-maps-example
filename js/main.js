(function () {

    'use strict';

    function setup () {
        var options = {
            zoom: 16,
            center: new google.maps.LatLng(19.408392, -99.187206),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        },
        mapContainer = document.getElementsByClassName('map'),
        // map = new google.maps.Map(document.getElementById('map'), options);
        map = new google.maps.Map(mapContainer[0], options),
        marcador = new google.maps.Marker({
            position: options.center,
            map: map,
            title: 'Adesis México.',
            animation: google.maps.Animation.DROP,
            draggable: true
        }),
        marcador2 = new google.maps.Marker({
            position: new google.maps.LatLng(19.407886, -99.181263),
            map: map,
            title: 'Universidad La Salle.',
            animation: google.maps.Animation.DROP,
            draggable: false
        });

        google.maps.event.addListener(marcador, 'dragstart', function() {
           console.log('mueveme con cariño!');
        });

        google.maps.event.addListener(marcador, 'dragend', function () {
            console.log('soltado en LAT: ' + marcador.getPosition().lat() + 'LON: ' + marcador.getPosition().lng());
        });

        google.maps.event.addListener(marcador2, 'click', function () {
            map.setZoom(18);
            map.setCenter(marcador2.getPosition());
        });
    }

    setup();

})();