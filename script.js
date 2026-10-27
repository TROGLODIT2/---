let button_timer = 0;
let button = document.querySelector('.button');
let button_text = document.querySelector('.button_text');

// Задаем время в секундах
let totalSeconds = 120;

// Запускаем интервал каждую 1 секунду (1000 миллисекунд)
const timer = setInterval(() => {
  // Считаем минуты и секунды
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  // Форматируем вывод, чтобы всегда было двузначное число (например, 05 вместо 5)
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  console.log(`${formattedMinutes}:${formattedSeconds}`);

  // Проверяем, не закончилось ли время
  if (totalSeconds <= 0) {
    clearInterval(timer); // Останавливаем таймер
    console.log('done');
    button_timer = 1;
    button_text.style.display = 'block';
    button.style.display = 'block';
    return;
  }

  // Уменьшаем счетчик на 1 секунду
  totalSeconds--;
}, 1000);
