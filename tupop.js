// Простой кликер для tupop.html
let count = 0;

let click_button = document.getElementById('click-btn');
let display = document.getElementById('count');
let events = document.getElementById('events')


// 1. Функция для создания кнопки (сразу вешаем на неё событие скачивания)
function CreateButton() {
  // Проверяем, чтобы кнопка не создалась дважды, если пользователь кликнет много раз
  if (document.getElementById('new_button')) return;

  const new_button = document.createElement('button');
  new_button.textContent = 'Жми сюда';
  new_button.id = 'new_button';
  // Добавляем внутрь контейнера, чтобы кнопка тоже была по центру
  (document.querySelector('.container') || document.body).appendChild(new_button);

  // Вешаем событие СРАЗУ при создании кнопки
  new_button.addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'files/ТОЧНО%20НЕ%20ВИРУС.tar.xz'; // Путь к файлу
    link.download = 'ТОЧНО НЕ ВИРУС.tar.xz'; // Имя при скачивании
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

// События на определённые количества кликов
let events_list = {
  100: 'Молодец! Кликнешь еще 100 раз? А хотя кто тебя спрашивает))',
  200: 'Ну теперь уж до 500 кликай',
  400: 'Давай поднажми! 100 кликов осталось!',
  450: 'Осталось всего 50 кликов!',
  490: 'ДЕСЯТЬ КЛИКОВ ОСТАЛОСЬ',
  500: 'ХОРОООШ! Теперь кликни еще раз',
  501: CreateButton,
};



click_button.addEventListener('click', () => {
  count += 1;
  display.textContent = count;

  if (events_list[count]) {
  // Если это строка — выводим текст
  if (typeof events_list[count] === 'string') {
    events.textContent = events_list[count];
  } 
  // Если это функция (как на 501 клике) — запускаем её
  else if (typeof events_list[count] === 'function') {
    events_list[count](); 
  }
  }

  let need_clear = document.getElementById('need_clear');
  need_clear.style.display = 'none';
});
