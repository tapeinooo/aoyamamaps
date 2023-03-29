function initMap() {
  var useragent = navigator.userAgent;
  var mapdiv = document.getElementById("map");

  if (useragent.indexOf('iPhone') != -1 || useragent.indexOf('Android') != -1){
    mapdiv.style.width = '100%';
    mapdiv.style.height = '100%';
  }

  var opts = {
    zoom: 15,
    center: new google.maps.LatLng(35.6807527,139.7670716)
  };
  var map = new google.maps.Map(mapdiv, opts);
}
