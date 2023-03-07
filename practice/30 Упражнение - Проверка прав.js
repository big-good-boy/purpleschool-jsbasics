// Дано
let balance = 1000; // Денежный баланс покупателя
let bonusBalance = 100; // Бонусный баланс покупателя
let isBanned = false; // Не забанен
let isExist = false; // Ранее игра не покупалась
let isSelling = true; // Игра в продаже

// Условие для покупки
console.log(
	(balance >= 1000 || bonusBalance >= 100)
	&& !isBanned
	&& !isExist
	&& isSelling
	? 'Вы можете совершить покупку'
	: 'Покупка невозможна'
);
