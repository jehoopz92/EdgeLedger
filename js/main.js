// Init map
function initMap() {
  // your location
  const loc = {
    lat: 35.5951,
    lng: -82.5515
  };
  // centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map });
}
