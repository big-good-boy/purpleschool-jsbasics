/*
	Васи положил 12 000$ на вклад 7% годовых с
	капитализацией 1 раз в месяц.
	Вывести в консоль, сможет ли он купить дом за 13 500$
	через 2 года после снятия вклада. И остаток после покупки.
*/

/*
	Моё решение
*/

// Вводные
const moneyUSD = 12000; // Сумма вклада
const rateYear = 7; // Годовая процентная ставка
const periodYears = 2; // Срок вклада, лет
const price = 13500; // Стоимость дома

// Решение
let rateMonth = 7 / 12; // Процентная ставка в месяц
let periodMonth = periodYears * 12; // Срок вклада, месяцев
let result = moneyUSD * (1 + rateMonth / 100) ** periodMonth;

if (result > price) {
	console.log("Вам хватает на покупку дома");
	console.log("После покупки останется $" + (result - price));
} else {
	console.log("На покупку дома не хватает");
}
