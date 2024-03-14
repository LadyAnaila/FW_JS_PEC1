// Elements from HTML
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const selectedMovieName = document.getElementById('selected-movie-name');
const currencySelect = document.getElementById('currency-one');
const totalInCurrency = document.getElementById('total-in-currency');
const currencyText = document.getElementById('currency'); // New line to get currency span

// Variables
let ticketPrice = +movieSelect.value;
let selectedCurrency = currencySelect.value;
let rate = 1;

// Save selected movie index, price, and currency
function setMovieData(movieIndex, moviePrice, movieCurrency) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
  localStorage.setItem('selectedMovieCurrency', movieCurrency);
}

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedSeatsCount = selectedSeats.length;

  const { price, currency } = getSelectedMovieInfo();

  count.innerText = selectedSeatsCount;
  total.innerText = (selectedSeatsCount * price).toFixed(2);
  totalInCurrency.innerText = `${(selectedSeatsCount * price * rate).toFixed(2)} ${currency}`;
  currencyText.innerText = currency; // Update currency text
  
  const totalText = `You have selected ${selectedSeatsCount} seats for a total price of ${(selectedSeatsCount * price * rate).toFixed(2)} ${currency}`;
  document.getElementById('selected-message').innerText = totalText;
}

// Get data from localStorage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats')) || [];
  
  seats.forEach((seat, index) => {
    if (selectedSeats.indexOf(index) > -1) {
      seat.classList.add('selected');
    }
  });

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
    ticketPrice = +movieSelect.value;
  }

  const selectedCurrency = localStorage.getItem('selectedCurrency');
  if (selectedCurrency !== null) {
    currencySelect.value = selectedCurrency;
  }

  updateCurrency();
  updateSelectedCount();
}

// Movie select event
movieSelect.addEventListener('change', () => {
  const { price, currency } = getSelectedMovieInfo();
  ticketPrice = price;
  setMovieData(movieSelect.selectedIndex, price, currency);
  updateSelectedCount();
  selectedMovieName.innerText = movieSelect.options[movieSelect.selectedIndex].text;
});

// Currency select event
currencySelect.addEventListener('change', () => {
  selectedCurrency = currencySelect.value;
  updateCurrency();
});

// Seat click event
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
    updateSelectedCount();
  }
});

// Initial count and total set
updateSelectedCount();

// Function to get movie price and currency
function getSelectedMovieInfo() {
  const selectedMovieOption = movieSelect.options[movieSelect.selectedIndex];
  const moviePrice = parseFloat(selectedMovieOption.value);
  const movieCurrency = selectedMovieOption.getAttribute('data-currency');
  return { price: moviePrice, currency: movieCurrency };
}

// Fetch exchange rates and update DOM's currency
function updateCurrency() {
  const currency = currencySelect.value;
  localStorage.setItem('selectedCurrency', currency);

  fetch(`https://v6.exchangerate-api.com/v6/251b1886bfa5bb396e0d5740/latest/USD`)
    .then(res => res.json())
    .then(data => {
      rate = data.conversion_rates[currency];
      
      Array.from(movieSelect.options).forEach(option => {
        const price = parseFloat(option.value);
        option.innerText = `${option.text.split('(')[0].trim()} (${(price * rate).toFixed(2)} ${currency})`;
      });

      const { price } = getSelectedMovieInfo();
      ticketPrice = price * rate;
      updateSelectedCount();
    })
    .catch(err => {
      console.log(`Error fetching currency rates: ${err}`);
    });
}
