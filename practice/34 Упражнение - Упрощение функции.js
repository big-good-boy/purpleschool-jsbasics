// функция
function toPower(num, power) {
	const res = num ** power;
	return res;
}
console.log(toPower(2, 3));

// анонимная функция
const toPowerArrow1 = function (num, power) { return num ** power; }
console.log(toPowerArrow1(2, 3));

// стрелочная функция
const toPowerArrow2 = (num, power) => num ** power;
console.log(toPowerArrow2(2, 3));
