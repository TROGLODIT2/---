//Уличная программа

//Элементы HTML
let input = document.getElementById('input');
let input_button = document.getElementById('input_button')
let adress = document.getElementById('adress')

//Лист с адресами
let adress_list = {
  1: '55.713635, 36.821808',
  2: '55.713999, 36.828016',
  3: '55.720648, 36.833432',
  4: '55.726202, 36.836402',
  5: '55.713811, 36.821601',
  228: 'Почему-то я знал что ты это введешь',
  17: 'ТОТ ЭКСПЕРИМЕНТ НЕ БЫЛ ПРОВАЛЬНЫМ',
}

//Кнопка для адресов
input_button.addEventListener('click', () => {
    let input_value = input.value;
    if (adress_list[input_value]) {
        adress.textContent = adress_list[input_value];
    }
})