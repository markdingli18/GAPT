var map = L.map('Valletta').setView([35.8989, 14.5146], 15);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
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

  L.marker([35.8964252381586, 14.510927456632919]).bindPopup( 'Jean de Vallette (1495-1568)<p><a href="https://en.wikipedia.org/wiki/Jean_Parisot_de_Valette" target="_blank"><u>www.jeandevallette.com</a></u></p>').addTo(map);
  L.marker([35.89551801290154, 14.510820964992332]).bindPopup( 'Manwel Dimech (1860-1921)<p><a href="https://en.wikipedia.org/wiki/Manwel_Dimech" target="_blank"><u>www.manweldimech.com</a></u></p>').addTo(map);
  L.marker([35.895010, 14.512288]).bindPopup( 'Les Gavroches<p><a href="https://en.wikipedia.org/wiki/Les_Gavroches" target="_blank"><u>www.lesgavroches.com</a></u></p>').addTo(map);
  L.marker([35.89540266186759, 14.510782558406582]).bindPopup( 'Dom Mintoff (1916-2012)<p><a href="https://en.wikipedia.org/wiki/Dom_Mintoff" target="_blank"><u>www.dommintoff.com</a></u></p>').addTo(map);
  // L.marker([]).bindPopup( 'Sena Internazzjonali Taż-Żgħażagħ<p><a href="https://en.wikipedia.org/wiki/Dom_Mintoff" target="_blank"><u>www.SenaInternazzjonaliTaż-Żgħażagħ.com</a></u></p>').addTo(map);
  L.marker([35.899302689463696, 14.513953681741036]).bindPopup( '7 Ta Ġunju 1919<p><a href="https://en.wikipedia.org/wiki/Sette_Giugno" target="_blank"><u>www.setteguigno.com</a></u></p>').addTo(map);
  // L.marker([]).bindPopup( 'The Mall<p><a href="" target="_blank"><u>www.themall.com</a></u></p>').addTo(map);
  // L.marker([]).bindPopup( 'Joseph Scicluna (1903-1970)<p><a href="" target="_blank"><u>www.josephscicluna.com</a></u></p>').addTo(map);
  L.marker([35.89310269682038, 14.504649436838736]).bindPopup( 'Hugo Mifsud (1889-1942)<p><a href="https://en.wikipedia.org/wiki/Ugo_Pasquale_Mifsud" target="_blank"><u>www.hugomifsud.com</a></u></p>').addTo(map);


  