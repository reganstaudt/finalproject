
let mm = L.map('bigmap').setView([38.818723, -95.343793], 3.56);
L.tileLayer('https://api.mapbox.com/styles/v1/reganstaudt/clq1a711o013t01pg5rsc841w/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmVnYW5zdGF1ZHQiLCJhIjoiY2xwMnhmcTN1MHMzZTJqbXI2dnh5MnR1aSJ9.oZkWjbwhv-lFanAqFYtJWw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(mm);
let marker = L.marker([38.9072, -77.0369]).addTo(mm);
let marker2 = L.marker([40.0583, -74.4057]).addTo(mm);
let marker3 = L.marker([44.5588, -72.5778]).addTo(mm);
let marker4 = L.marker([43.8041, -120.5542]).addTo(mm);
let marker5 = L.marker([47.7511, -120.7401]).addTo(mm);
let marker6 = L.marker([42.4072, -71.3824]).addTo(mm);
let marker7 = L.marker([45.2538, -69.4455]).addTo(mm);
let marker8 = L.marker([39.5501, -105.7821]).addTo(mm);
let marker9 = L.marker([36.7783, -119.4179]).addTo(mm);
let marker10 = L.marker([42.6526, -73.7562]).addTo(mm);

marker.bindPopup("#1 Washington D.C.")
marker2.bindPopup("#2 New Jersey")
marker3.bindPopup("#3 Vermont")
marker4.bindPopup("#4 Oregon")
marker5.bindPopup("#5 Washington")
marker6.bindPopup("#6 Massachusetts")
marker7.bindPopup("#7 Maine")
marker8.bindPopup("#8 Colorado")
marker9.bindPopup("#9 California")
marker10.bindPopup("#10 New York")



