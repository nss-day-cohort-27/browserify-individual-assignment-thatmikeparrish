const locationsForm = require("./locations/locationsForm")
const saveLocations = require("./locations/saveLocations")
const locationsToDOM = require("./locations/locationsToDOM")
const deleteLocation = require("./locations/deleteLocation")

document.querySelector("#locationsForm").innerHTML = locationsForm.renderForm()
saveLocations()
deleteLocation()

locationsToDOM()
