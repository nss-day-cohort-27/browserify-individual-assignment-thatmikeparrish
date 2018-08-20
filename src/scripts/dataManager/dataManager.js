const dataManager = Object.create(null, {
    getLocations: {
        value: () => {
            return fetch("http://localhost:8088/locations").then(r => r.json())
        }
    },

    deleteLocations: {
        value: (id) => {
            return fetch(`http://localhost:8088/locations/${id}`, {
                method: "DELETE"
            }).then(r => r.json)
        }
    },

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
})

 module.exports = dataManager