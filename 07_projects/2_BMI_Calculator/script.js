const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const message = document.querySelector('.message')
    let bmi;

    results.innerHTML = '';
    message.innerHTML = '';

    if (isNaN(height) || height <= 0 ) {
        results.innerHTML = "please give a valid height"
        
    }
    else if(isNaN(weight) || weight <= 0 ) {
        results.innerHTML = "please give a valid weight"
    }
    else{
         bmi = (weight / ((height*height)/10000)).toFixed(2)
        // show the result
        results.innerHTML = `<span>${bmi}</span>`;
    }

    if (bmi) {
    if (bmi < 18.6) {
        const message = document.querySelector('.message')
        message.innerHTML = `The given height ${height} and weight ${weight} has BMI ${bmi} is UNDER WEIGHT`
    }
    else if (bmi >= 18.6 && bmi <= 24.9){
        const message = document.querySelector('.message')
        message.innerHTML = `The given height ${height} and weight ${weight} has BMI ${bmi} is NORMAL RANGE`
    }
    else {
        const message = document.querySelector('.message')
        message.innerHTML = `The given height ${height} and weight ${weight} has BMI ${bmi} is OVER WEIGHT`
    }
}
})