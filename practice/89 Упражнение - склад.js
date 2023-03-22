// моё
const warehouse = {
	goods: [],
	findGoodById: function (id) {
		for (const iterator of this.goods) {
			if (iterator.id === id)
				return iterator;
		}
	},
	addGood: function (product) {
		if (product.id)
			this.goods.push(product);
	},
	getWeightKg: function () {
		let result = 0;
		for (const iterator of this.goods) {
			if (iterator?.weight?.kg)
				result += iterator.weight.kg;
		}
		return result;
	},
}

// моё 2
const warehouse2 = {
	goods: [],
	findGoodById: function (id) {
		return this.goods.find(el => el.id == id);
	},
	addGood: function (product) {
		if (product.id)
			this.goods.push(product);
	},
	getWeightKg: function () {
		return this.goods.reduce((acc, value) => {
			if (value?.weight?.kg)
				acc += value.weight.kg;
			return acc;
		}, 0);
	},
}
// в видео
const warehouse3 = {
	goods: [],
	findGoodById: function (id) {
		return this.goods.find(g => g.id == id);
	},
	addGood: function (good) {
		const existeGood = this.findGoodById(good.id);
		if (existeGood) {
			console.log('Этот товар уже есть на складе');
			return;
		}
		this.goods.push(good);
	},
	getWeightKg: function () {
		return this.goods.reduce((acc, el) =>
			acc += el.weight?.kg ? el.weight.kg : 0,
			0
		);
	},
}
