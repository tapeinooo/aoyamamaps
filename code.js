function initialize() {
  var map = new google.maps.Map(document.getElementById("map_canvas"));
  map.setCenter(new GLatLng(35.172999,136.897057), 12);

  var manager = new GMarkerManager(map);

  var markers1 = [
    new GMarker(new GLatLng(35.176468,136.896866)),
    new GMarker(new GLatLng(35.174153,136.8970979)),
    new GMarker(new GLatLng(35.173234,136.89762)),
    new GMarker(new GLatLng(35.173383,136.89987)),
    new GMarker(new GLatLng(35.172986,136.899894)),
    new GMarker(new GLatLng(35.172848,136.897845)),
    new GMarker(new GLatLng(35.174106,136.896676)),
    new GMarker(new GLatLng(35.175878,136.896483))
  ];

  var markers2 = [
    new GMarker(new GLatLng(35.17613,136.89667)),
    new GMarker(new GLatLng(35.174131,136.896885)),
    new GMarker(new GLatLng(35.173034,136.897818)),
    new GMarker(new GLatLng(35.173192,136.899881))
  ];

  var marker3 = new GMarker(new GLatLng(35.172999,136.897057));

  manager.addMarkers(markers1, 16);
  manager.addMarkers(markers2, 14, 15);
  manager.addMarker(marker3, 0, 13);

  manager.refresh();
}
