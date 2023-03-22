const wallet = {
	balanse: 0,
	operations: [],
	increase: function (sum, reason) {
		this.balanse += sum;
		this.operations.push({
			sum: sum,
			reason: reason,
		});
		return true;
	},
	expenses: function (sum, reason) {
		if (sum > this.balanse)
			return false
		this.balanse -= sum;
		this.operations.push({
			sum: -sum,
			reason: reason,
		});
		return true;
	},
	getOperationLenght: function () {
		return this.operations.length;
	},
};
