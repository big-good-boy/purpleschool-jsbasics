/*
Ваша часовая ставка 80$ и вы готовы работать не
более 5 часов в день 5 дней в неделю (кроме выходных).
К вам приходит заказчик и предлагает заказ на 40
часов работы.
Сейчас понедельник.
Вы должны уехать через 11 дней.
Выведете в консоль:
- Boolean переменную успеете ли вы взяться за работу
- Сколько вы за неё попросите?
*/


/*
	Моё решение
*/

const rateHour = 80; // оплата за час
const hoursDay = 5; // рабочих часов в день
const weekDays = 5; // рабочих дней в неделю
const deadlineDays = 11; // дней до отпуска

const orderHours = 40; // часов на выполнение заказа

let workWeeks = deadlineDays / 7; // рабочих недель до отпуска
let deadlineWorkDays = workWeeks * weekDays; // рабочих дней до отпуска
let deadlineHours = deadlineWorkDays * hoursDay; // рабочих часов до отпуска
let rateOrder = rateHour * orderHours; // стоимость выполнения заказа

console.log("До отпуска осталось " + deadlineHours + " рабочих часов");
console.log("Успею ли я выполнить заказ? " + (deadlineHours >= orderHours));
console.log("За работу следует взять " + rateOrder + " $");



/*
	Решение из урока
*/

// Данные
const payRateUSD = 80;
const projectHours = 40;
const availableHours = (11 - 2) * 5;

// Результат
console.log('Смогу ли я работать? ' + (availableHours > projectHours));
console.log('Стоимость работ: ' + projectHours * payRateUSD + '$');
