function init(points) {
    window.map = new OpenLayers.Map("basicMap");
    var mapnik = new OpenLayers.Layer.OSM();
    window.fromProjection = new OpenLayers.Projection("EPSG:4326");   // Transform from WGS 1984
    window.toProjection = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection
    window.map.addLayer(mapnik);
    var zoom = 11;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function success(position) {
            // var map_position = new OpenLayers.LonLat(position.coords.longitude, position.coords.latitude).transform(fromProjection, toProjection);

            var map_position = new OpenLayers.LonLat(49.7, 58.56).transform(fromProjection, toProjection);
            window.map.setCenter(map_position, zoom);
        });
    } else {
        var position = new OpenLayers.LonLat(39.5932478, 55.767751399999995).transform(fromProjection, toProjection);
        window.map.setCenter(position, zoom);
    }


    if(points.length > 0){
        points.forEach(add_fire)
    }
}

function add_fire(point) {
    var lonLat = new OpenLayers.LonLat(point[1], point[0])
        .transform(
            new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
            window.toProjection
        );

    var markers = new OpenLayers.Layer.Markers("Markers");
    window.map.addLayer(markers);

    markers.addMarker(new OpenLayers.Marker(lonLat));


    // window.map.setCenter(lonLat, 15);
}

