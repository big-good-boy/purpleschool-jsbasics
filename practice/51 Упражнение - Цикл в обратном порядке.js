const arr = ['!', 'JS', 'люблю', 'Я'];

function reverse(array) {
	const arr = [];
	for (let i = array.length; i >= 0; i--)
		arr.push(array[i]);
	return arr.join(' ');
}

console.log(reverse(arr));
