const controlsForm = document.getElementById('controlsForm');
let outputPassword = document.getElementById('outputPassword');

controlsForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const length = controlsForm.length.value;
    const hasSymbols = controlsForm.hasSymbols.checked;
    const hasCapitals = controlsForm.hasCapitals.checked;
    const hasNumbers = controlsForm.hasNumbers.checked;

    let uri = `http://localhost:5000/api/password?length=${length}`;

    if (hasSymbols === true) {
        uri = `${uri}&hasSymbols=${hasSymbols}`;
    }

    if (hasCapitals === true) {
        uri = `${uri}&hasCapitals=${hasCapitals}`;
    }

    if (hasNumbers === true) {
        uri = `${uri}&hasNumbers=${hasNumbers}`;
    }

    fetch(uri)
        .then((response) => response.text())
        .then((text) => {
            outputPassword.value = text;
        })
});

// ToDo: Löschen Button

// ToDo: Test Passwort