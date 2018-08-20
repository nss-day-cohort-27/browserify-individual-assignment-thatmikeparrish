let locationCard = require("./locationCard");


function locationList(result) {
    let sortedData = result.sort(function(a, b){return b.date - a.date})
    sortedData.forEach(item => {
        locationToDOM(locationCard(item.id, item.name, item.title, item.location, item.content))
    });
}

function locationToDOM(result){
    document.querySelector("#locationsList").innerHTML += result
}

module.exports = locationList