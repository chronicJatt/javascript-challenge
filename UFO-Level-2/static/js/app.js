// Get a reference to the table body
var tbody = d3.select("tbody");

// from data.js
var tableData = data;

// Build Table Function
function buildTable(data) {
    // Clear tbody to prepare for new table build
    tbody.html('');
    data.forEach((dataRow) => {
        var row = tbody.append('tr');
        Object.values(dataRow).forEach((value) => {
            var cell = row.append('td');
            cell.text(value);
        });
    });
};

// Event Trigger Function
function handleClick() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Initialise filter variables
    var date = d3.select('#datetime').property('value');
    var city = d3.select('#city').property('value');
    var state = d3.select('#state').property('value');
    var country = d3.select('#country').property('value');
    var shape = d3.select('#shape').property('value');

    var filterData = tableData;

    // Limit filterData if anything is entered into any filter field
    if(date, city, state, country, shape) {
        filterData = filterData.filter((row) => row.datetime === date);
        filterData = filterData.filter((row) => row.city === city);
        filterData = filterData.filter((row) => row.state === state);
        filterData = filterData.filter((row) => row.country === country);
        filterData = filterData.filter((row) => row.shape === shape);
    };
    // if(city) {
    //     filterData = filterData.filter((row) => row.city === city);
    // }
    // if(state) {
    //     filterData = filterData.filter((row) => row.state === state);
    // }
    // if(country) {
    //     filterData = filterData.filter((row) => row.country === country);
    // }
    // if(shape) {
    //     filterData = filterData.filter((row) => row.shape === shape);
    // }
    buildTable(filterData);
};

// Event Handler
d3.selectAll('#filter-btn').on('click', handleClick);
d3.select('form').on('submit', handleClick);

// Build default table with all data
buildTable(tableData)