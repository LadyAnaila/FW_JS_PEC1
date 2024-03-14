const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');
const loadingEl = document.getElementById('loading');
const errorMessageEl = document.getElementById('error-message');

// Cambio y actualización del DOM
function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;
    const amount_one = parseFloat(amountEl_one.value);

    if (amount_one < 0) {
        errorMessageEl.innerText = 'Fill in with a number equal or bigger than 0.'
        errorMessageEl.style.display = 'block';
        loadingEl.style.display = 'none';
        rateEl.style.display = 'none';

    } else {
        errorMessageEl.style.display = 'none';
        loadingEl.style.display = 'block';
        rateEl.style.display = 'none';

        fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const rate = data.rates[currency_two];
                rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
                amountEl_two.value = (amount_one * rate).toFixed(2);
                loadingEl.style.display = 'none';
                rateEl.style.display = 'block';
            })
            .catch(error => {
                errorMessageEl.innerText = 'There is a problem with the data. Try again.';
                errorMessageEl.style.display = 'block';
                loadingEl.style.display = 'none';
                rateEl.style.display = 'none';
            });
    }
}

// Event listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);
swap.addEventListener('click', () => {
    [currencyEl_one.value, currencyEl_two.value] = [currencyEl_two.value, currencyEl_one.value];
    calculate();

}); 


calculate();