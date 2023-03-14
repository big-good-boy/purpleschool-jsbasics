const arr = [1, 4, 4, 10, 20];

function some(value, arr) {
	const result = arr.findIndex(el => el === value);
	return (result !== -1) ? true : false;
}
