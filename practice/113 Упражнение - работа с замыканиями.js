'use strict';

const userInfo = {
	balance: 0,
	operations: 0,
	increse(sum) {
		this.balance += sum;
		this.operations++;
	}
}

function user() {
	const userObj = {
		balance: 0,
		operations: 0,
		increse(sum) {
			this.balance += sum;
			this.operations++;
		}
	};
	return function () {
		return userObj;
	}
}

// const user1 = userInfo;
// user1.increse(100);
// user1.increse(200);
// user1.increse(-100);

const user1 = user();
user1().increse(100);
user1().increse(200);
console.log(user1());

const user2 = user();
user2().increse(300);
user2().increse(200);
console.log(user2());

