let dataManager = require("../dataManager/dataManager")
let locationsList = require("./locationsList")

function locationsToDOM() {
    dataManager.getLocations()
    .then((result) => {
        locationsList(result);
    });
}

// This function actually writes the cards to the DOM.

module.exports = locationsToDOM