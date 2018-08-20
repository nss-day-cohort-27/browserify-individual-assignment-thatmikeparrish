const locationsForm = Object.create(null, {
    clearForm: {
        value: () => {
            document.querySelector("#registrationForm").value = " "
        }
    },

    renderForm: {
        value: () => {
            return `
                <h1>What are some of your favorite places?</h1>
                <div>
                    <input required type="text" id="name" placeholder="enter name"><br><br>
                    <input required type="text" id="title" placeholder="enter a favorite place"><br><br>
                    <input required type="text" id="location" placeholder="where is it?"><br><br>
                    <textarea id="content" rows="10"></textarea><br><br>
                    <button id="submit">submit</button>
                </div>
            `
        }
    }
})

module.exports = locationsForm