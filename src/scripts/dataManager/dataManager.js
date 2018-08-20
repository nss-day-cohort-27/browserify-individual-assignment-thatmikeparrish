const dataManager = Object.create(null, {
    getLocations: {
        value: () => {
            return fetch("http://localhost:8088/locations").then(r => r.json())
        }
    },
    // This grabs the information on the API, and parse's it into json. Then it returns the value for the next function to use.

    deleteLocations: {
        value: (id) => {
            return fetch(`http://localhost:8088/locations/${id}`, {
                method: "DELETE"
            }).then(r => r.json)
        }
    },
    // This allows the deletion of a single item with a matching ID.

    postLocations: {
        value: (newLocation) => {
            return fetch("http://localhost:8088/locations", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newLocation)
            }).then(r => r.json)
        }
    }
    // This allows you to save items to the database api.

})

 module.exports = dataManager