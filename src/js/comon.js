$(document).ready(init);
function init(){
    initMap();
    $('#informacion').click(informate);
}
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}
function informate(){
    $('#informate').show(900);
}