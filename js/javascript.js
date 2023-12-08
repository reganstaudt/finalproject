
let dc = L.map('map1').setView([38.875228,-77.034785 ], 8.51); 
L.tileLayer('https://api.mapbox.com/styles/v1/reganstaudt/clpiq29p300cq01qu3viff8ya/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmVnYW5zdGF1ZHQiLCJhIjoiY2xwMnhmcTN1MHMzZTJqbXI2dnh5MnR1aSJ9.oZkWjbwhv-lFanAqFYtJWw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(dc);

let newJersey = L.map('map2').setView([40.164981, -74.657225],7.24);
L.tileLayer('https://api.mapbox.com/styles/v1/reganstaudt/clpiq29p300cq01qu3viff8ya/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmVnYW5zdGF1ZHQiLCJhIjoiY2xwMnhmcTN1MHMzZTJqbXI2dnh5MnR1aSJ9.oZkWjbwhv-lFanAqFYtJWw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(newJersey);



