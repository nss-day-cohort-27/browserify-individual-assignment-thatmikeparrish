function locationCard(id, name, title, location, content) {
    return `
        <div id="location--${id}" class="card text-center">
            <div class="card-header">
                <h3>${title}</h3>
                <h4>${location}</h4>
            </div>
            <div class="card-body">
                <p>${content}</p>
            </div>
            <div class="card-footer">
                <h5>${name}</h5>
                <button id="delete--${id}">Delete</button>
            </div>
        </div>
    `
}

// This exports the body of the location card, so the next function knows how to build it.

module.exports = locationCard