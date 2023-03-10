const operations = [1000, -700, 300, -500, 10000];
let strtingBalance = 100;

function getBallance(arrayOfOperations, initialBalance) {
	let balance = initialBalance;
	for (const element of arrayOfOperations)
		balance += element;
	return balance;
}

function checkOperation(arrayOfOperations, initialBalance) {
	let balance = initialBalance;
	for (const element of arrayOfOperations) {
		balance += element;
		if (balance < 0)
			return false;
	}
	return true;
}

function averageOperations(arrayOfOperations) {
	let positiveSum = 0;
	let positiveCount = 0;
	let negativeSum= 0;
	let negativeCount = 0;

	for (const element of arrayOfOperations) {
		if (element > 0) {
			positiveSum += element;
			positiveCount++;
		}
		if (element < 0) {
			negativeSum += -element;
			negativeCount++;
		}
	}
	return [positiveSum / positiveCount, negativeSum / negativeCount];
}
