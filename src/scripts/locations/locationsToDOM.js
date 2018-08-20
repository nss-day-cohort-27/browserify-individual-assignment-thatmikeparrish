let dataManager = require("../dataManager/dataManager")
let locationsList = require("./locationsList")

function locationsToDOM() {
    dataManager.getLocations()
    .then((result) => {
        locationsList(result);
    });
}

module.exports = locationsToDOM