const prices = [[100, 200], [120, 100], [200, 350]];

// Правильное решение
const result = prices
	.map(product => product[1] - product[0])
	.filter(price => price > 0)
;
console.log(result);

// Моё решение
const mainResult = prices.filter((value) => value[0] - value[1] < 0);
console.log(mainResult);
// Я не правильно понял задание