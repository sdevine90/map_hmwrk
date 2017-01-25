var initialize = function(){
  var center = {lat: 36.1540, lng: -95.9928};
  var mapDiv = document.querySelector("#main-map");

  var mainMap = new MapWrapper(mapDiv, center, 10);
  mainMap.addMarker(center);

  var aquarium = {lat: 35.9518, lng: -95.6508};
  mainMap.addMarker(aquarium);
  mainMap.addClickEvent();

  

}



window.onload = initialize;