// Простой кликер для tupop.html
let count = 0;

let button = document.getElementById('click-btn');
let display = document.getElementById('count');

// События на определённые количества кликов
let events = {
  100: 'Достигнуто 100 кликов!',
  200: 'Достигнуто 200 кликов!',
  400: 'Достигнуто 400 кликов!',
  450: 'Достигнуто 450 кликов!',
  490: 'Достигнуто 490 кликов!',
  500: 'Достигнуто 500 кликов! Финал!'
};

button.addEventListener('click', () => {
  count += 1;
  display.textContent = count;

  if (events[count]) {
    alert(events[count]);
  }
});
