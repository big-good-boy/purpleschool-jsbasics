'use strict';

function submitForm() {
	const input = document.querySelector('.input').value;
	if (!input) {
		return;
	}
	document.querySelector('.panel').innerText = input;
	document.querySelector('.input').value = '';
	document.querySelector('.notification').classList.remove('notification_hidden');

	localStorage.setItem('text', JSON.stringify({text: input}));
}

function inputChanged(e) {
	if (e.code == 'Enter') {
		submitForm();
	}
}
