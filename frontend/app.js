const controlsForm = document.getElementById('controlsForm');



controlsForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // let length = controlsForm.length.value;
    // let hasSymbols = controlsForm.hasSymbols.value;
    // let hasCapitals = controlsForm.hasCapitals.value;
    // let hasNumbers = controlsForm.hasNumbers.value;

    // console.log(length, hasSymbols, hasCapitals, hasNumbers);

    // new FormData(controlsForm);

    // console.log(FormData);

    const length = document.getElementById('length').value;
    const symbols = document.getElementById('symbols').value;
    const capitals = document.getElementById('capitals').value;
    const numbers = document.getElementById('numbers').value;

    console.log(length, symbols, capitals, numbers);

});


//"http://localhost:5000/api/password?"

