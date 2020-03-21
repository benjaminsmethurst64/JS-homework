// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

// For loop adding rows for objects
function table () {
data.forEach((sighting) => {
    
    var row = tbody.append("tr"); 
        Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});
}
table();

var sightings = data;
var button = d3.select("#filter-btn");

// filter button 
button.on("click" , function() {
    var inputElement = d3.select("#datetime");
        var inputDate = inputElement.property("value");
        tbody.html("");
    var filteredSightings = sightings.filter(sighting => sighting.datetime === inputDate);
        filteredSightings.forEach((sighting) => {
            var row = tbody.append("tr"); 
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

    if (inputDate == "" || inputDate == null) {
        table();
      }
});