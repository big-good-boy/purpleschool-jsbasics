const arr = [1, 4, 4, 10];

// Моё решение
const result = arr.reduce((acc, val, i) => (acc + val) / i);

// Моё второе решение
const result2 = arr.reduce((acc, el, i) => {
	if (i == arr.length - 1) {
		return (acc + el) / (i + 1);
	}
	return acc += el;
}, 0);

// Правильное решение
const avg = arr.reduce((acc, el, i) => {
	if (i != arr.length - 1) {
		return acc + el;
	} else {
		return (acc + el) / arr.length;
	}
}, 0);