// Add console.log to check to see if our code is working.
console.log("working");

// Assign variable map to the object L.map and instantiate the object with string mapid
// mapid references the id tag in the div element on the html file
// Create the map object with a center and zoom level (scale of 0-18).
let map = L.map('mapid').setView([40.7, -94.5], 4);
// alternative is let map = L.map("mapid", { center: [40.7, -94.5], zoom: 4}); Used when adding multiple tile layers or background image of map

// Assign the tile layer method that will be the background of our map from tile layer API's
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);