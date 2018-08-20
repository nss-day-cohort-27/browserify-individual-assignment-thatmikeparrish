let locationCard = require("./locationCard");


function locationList(result) {
    let sortedData = result.sort(function(a, b){return b.date - a.date})
    sortedData.forEach(item => {
        locationToDOM(locationCard(item.id, item.name, item.title, item.location, item.content))
    });
}
// The first function sorts the data by the date(timestamp), and the second function builds the cards based on the order of the data.

function locationToDOM(result){
    document.querySelector("#locationsList").innerHTML += result
}
// This function sends the cards to the next function and tells it where to write them.

module.exports = locationList