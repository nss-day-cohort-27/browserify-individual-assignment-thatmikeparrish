const locationsForm = Object.create(null, {
    clearForm: {
        value: () => {
            document.querySelector("#registrationForm").value = " "
        }
    },

    renderForm: {
        value: () => {
            return `
                <div>
                    <input required type="text" id="name" placeholder="What's your name?"><br><br>
                    <input required type="text" id="title" placeholder="What's the name for one of your favorite places?"><br><br>
                    <input required type="text" id="location" placeholder="Where is this place at?"><br><br>
                    <textarea id="content" rows="10" placeholder="Tell us about it!"></textarea><br><br>
                    <button id="submit">submit</button>
                </div>
            `
        }
    }
})

// This builds the HTML version of the form and gives an extra feature to clear it when you click the submit button.

module.exports = locationsForm