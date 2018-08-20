let dataManager = require("../dataManager/dataManager");

const saveLocations = function () {
    document.querySelector("#submit").addEventListener("click", () => {

        const newLocation = {
            name: document.querySelector("#name").value,
            title: document.querySelector("#title").value,
            location: document.querySelector("#location").value,
            content: document.querySelector("#content").value,
            date: Date.now()
        }

        dataManager.postLocations(newLocation).then(() => {
            locationsForm.clearForm()
        })
    })
}

module.exports = saveLocations