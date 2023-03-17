var map = L.map('Valletta').setView([35.8989, 14.5146], 15);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    minZoom: 14,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
  }).addTo(map);
  // show the scale bar on the lower left corner
  L.control.scale({imperial: true, metric: true}).addTo(map);

  //get the geonames hot spots
  var geonames = new XMLHttpRequest();
  geonames.open("GET", "http://api.geonames.org/findNearbyWikipedia?lat=35.89&lng=14.51&username=marcon1", false);
  geonames.send(null);

  console.log(geonames.response);

  L.marker([35.8906, 14.5084]).bindPopup( 'Church of the flight into Egypt<p><a href="https://en.wikipedia.org/wiki/Church_of_the_Flight_into_Egypt" target="_blank"><u>www.churchoftheflightintoegypt.com</a></u></p>').addTo(map);
  L.marker([35.8945,14.511]).bindPopup('Lascaris War Rooms<p><a href="https://en.wikipedia.org/wiki/Lascaris_War_Rooms" target="_blank"><u>www.lascariswarrooms.com</a></u></p>').addTo(map);
  L.marker([35.89, 14.5081]).bindPopup('Valletta Waterfront<p><a href="https://en.wikipedia.org/wiki/Valletta_Waterfront"target="_blank"</a></u></p>www.vallettawaterfront.com').addTo(map);
  L.marker([35.8937,14.5081]).bindPopup('War Memorial<p><a href="https://en.wikipedia.org/wiki/War_Memorial_%28Floriana%29"target="_blank"</a></u></p>www.warmemorial.com').addTo(map);
  L.marker([35.894, 14.5128]).bindPopup('Lascaris Battery<p><a href="https://en.wikipedia.org/wiki/Lascaris_Battery"target="_blank"</a></u></p>www.lascarisbattery.com').addTo(map);