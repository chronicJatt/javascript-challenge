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
    var date = d3.select('#datetime').property('value');
    var filterData = tableData;
    // Limit filterData is a date is entered into filter field
    if(date) {
        filterData = filterData.filter((row) => row.datetime === date);
    }
    buildTable(filterData);
};

// Event Handler
d3.selectAll('#filter-btn').on('click', handleClick);
d3.select('form').on('submit', handleClick);

// Build default table with all data
buildTable(tableData)