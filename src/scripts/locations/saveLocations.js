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
        // This takes the information from the form and puts it in a variable to pass to the API

        dataManager.postLocations(newLocation).then(() => {
            locationsForm.clearForm()
        })
        // This is a simple function to clear the form once you hit submit
    })
}

module.exports = saveLocations