let button_timer = 0;
let button = document.querySelector('.button');
let button_text = document.querySelector('.button_text');
// Простой кликер для tupop.html
let count = 0;

// Задаем время в секундах
let totalSeconds = 15;
let button = document.getElementById('click-btn');
let display = document.getElementById('count');

// Запускаем интервал каждую 1 секунду (1000 миллисекунд)
const timer = setInterval(() => {
  // Проверяем, не закончилось ли время
  if (totalSeconds <= 0) {
    clearInterval(timer); // Останавливаем таймер
    console.log('done')
    let button_timer = 1;
    button_text.style.display = 'block';
    button.style.display = 'block';
    return;
  }

  // Считаем минуты и секунды
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  // Форматируем вывод, чтобы всегда было двузначное число (например, 05 вместо 5)
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");
// События на определённые количества кликов
let events = {
  100: 'Достигнуто 100 кликов!',
  200: 'Достигнуто 200 кликов!',
  400: 'Достигнуто 400 кликов!',
  450: 'Достигнуто 450 кликов!',
  490: 'Достигнуто 490 кликов!',
  500: 'Достигнуто 500 кликов! Финал!'
};
