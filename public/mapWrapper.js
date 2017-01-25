var MapWrapper = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
}

MapWrapper.prototype = {
  addMarker: function(coords){
    var marker = new google.maps.Marker({
      position: coords, 
      map: this.googleMap
    });
  },
  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, "click", function(event){
      console.log(event);
      console.log(event.latLng.lat());
      var position = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      };
      this.addMarker(position);
    }.bind(this));
  },
  createMarker: function() {
    var infoWindow = new google.maps.InfoWindow({
            content: infoWindowContent
        });
        google.maps.event.addListener(addMarker, 'click', function() {
              infoWindow.open(addMarker, addClickEvent);
          });
  }
}

