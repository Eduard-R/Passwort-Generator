const controlsForm = document.getElementById('controlsForm');
const outputPassword = document.getElementById('outputPassword');
const inputTestPassword = document.getElementById('inputTestPassword');

controlsForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const length = controlsForm.length.value;
    const hasSymbols = controlsForm.hasSymbols.checked;
    const hasCapitals = controlsForm.hasCapitals.checked;
    const hasNumbers = controlsForm.hasNumbers.checked;

    let url = `http://localhost:5000/api/password?length=${length}`;

    if (hasSymbols === true) {
        url = `${url}&hasSymbols=${hasSymbols}`;
    }

    if (hasCapitals === true) {
        url = `${url}&hasCapitals=${hasCapitals}`;
    }

    if (hasNumbers === true) {
        url = `${url}&hasNumbers=${hasNumbers}`;
    }

    fetch(url)
        .then((response) => response.text())
        .then((text) => {
            outputPassword.value = text;
        })
});

function clearOutput() {
    document.getElementById('outputPassword').value = '';
}

function testPassword() {

    if (inputTestPassword.value == '') {
        alert('Kein Passwort zum Testen vorhanden');
    } else {

        if (inputTestPassword.value.length < 8) {
            alert('Passwort ist unsicher');
        } else {
            alert('Passwort ist sicher');
        }
    }
}