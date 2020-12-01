// from data.js
var tableData = data;

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Loop through an array of objects, then each object
data.forEach(function(i) {
        
    // Append a table row for each object
    var row = tbody.append("tr");

    // Get the entries for each object in the array
    Object.entries(i).forEach(([key, value]) => {
            
        // Append a cell to the row for each value in the object
        var cell = row.append("td");

        // Update each cell's text with ufo report values (datetime, city, state, country, shape, durationMinutes)
        cell.text(value);
    });
});


// Use a date form in the HTML document and write JavaScript code that will 
// listen for events and search through the `date/time` column to find rows that match user input.

// Select the form
var form = d3.select("#form");

// Create an event handler
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw html node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    // Use the form input to filter the data by date
    function dateFilter(x) {
        if (inputValue === x.datetime)
            return x;
        else if (inputValue === "")
            return x;  
    };

    var filterResults = data.filter(dateFilter);

    console.log(filterResults);


    // Use D3 to select the table body
    var tbody = d3.select("tbody");

    // Remove any values from the table
    tbody.html("");

    // Loop through an array of objects, then each object
    filterResults.forEach(function(i) {
    
    // Append a table row for each object
    var row = tbody.append("tr");

    // Get the entries for each object in the array
    Object.entries(i).forEach(([key, value]) => {
        
        // Append a cell to the row for each value in the object
        var cell = row.append("td");

        // Update each cell's text with ufo report values (datetime, city, state, country, shape, durationMinutes)
        cell.text(value)
    });
});

}

