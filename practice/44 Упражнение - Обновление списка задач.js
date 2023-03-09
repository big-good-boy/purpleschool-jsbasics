const tasks = ['Задача 1'];

function Add(task, list) {
	list.push(task);
}

function Remove(task, list) {
	const index = list.indexOf(task);
	if (index === -1) {
		return;
	}
	return list.splice(index, 1);
}

function Prioritize(task, list) {
	const result = Remove(task, list);
	if (!result) {
		return;
	}
	list.unshift(result[0]);
}