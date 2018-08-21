let dataManager = require("../dataManager/dataManager")

const deleteLocation = function () {
    document.querySelector("#locationsList").addEventListener("click", (event) => {

        if(event.target.id.split("--")[0] === "delete"){

            let id = event.target.id.split("--")[1]

            dataManager.deleteLocations(id).then(() => {
                locationsToDOM()
            })
        }

    })
}

module.exports = deleteLocation