const users = [
	{
		name: 'Вася',
		surname: 'Пупкин',
		age: 30,
		skills: ['Разработка', 'DevOps']
	},
	{
		name: 'Катя',
		surname: 'Белова',
		age: 18,
		skills: ['Дизайн']
	},
];

// моё
const userData = users.map(user => {
	return {
		fullName: user['name'] + ' ' + user['surname'],
		skillNum: user['skills'].length,
	};
});

// правильно
const userData2 = users.map(user => {
	return {
		fullName: `${user.name} ${user.surname}`,
		skillNum: user.skills.length,
	};
});
