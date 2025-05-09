let counter = 0;
let intervalId = null;

const counterDisplay = document.getElementById('counter');
const toggleBtn = document.getElementById('toggleBtn');
const resetBtn = document.getElementById('resetBtn');
const image = document.getElementById('image');

function updateCounter() {
  counter++;
  counterDisplay.textContent = counter;

  if (counter === 10) {
    clearInterval(intervalId);
    intervalId = null;
    toggleBtn.textContent = 'Avvia';
    image.style.display = 'block';

    setTimeout(() => {
      image.style.display = 'none';
      counter = 0;
      counterDisplay.textContent = counter;
    }, 3000);
  }
}

toggleBtn.addEventListener('click', () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    toggleBtn.textContent = 'Avvia';
  } else {
    intervalId = setInterval(updateCounter, 1000);
    toggleBtn.textContent = 'Ferma';
  }
});

resetBtn.addEventListener('click', () => {
  counter = 0;
  counterDisplay.textContent = counter;
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    toggleBtn.textContent = 'Avvia';
  }
  image.style.display = 'none';
});