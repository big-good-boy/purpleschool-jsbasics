'use strict';

// document.querySelector('.button').addEventListener('click', function () {
// 	const input = document.querySelector('.input').value;
// 	if (!input) {
// 		return;
// 	}
// 	document.querySelector('.panel').innerText = input;
// 	document.querySelector('.input').value = '';
// });

function submitForm() {
	const input = document.querySelector('.input').value;
	if (!input) {
		return;
	}
	document.querySelector('.panel').innerText = input;
	document.querySelector('.input').value = '';
	// document.querySelector('.notification').style.display = 'block';
	// document.querySelector('.notification').classList.add('notification_active');
	// document.querySelector('.notification').classList.remove('notification_hidden');
	// document.querySelector('.notification_hidden').classList.toggle('notification_active');
	document.querySelector('.notification').classList.replace('notification_hidden', 'notification_active');
	
	console.log(document.querySelector('.notification').getAttribute('class'));
	document.querySelector('.notification').setAttribute('key', 1);
}

// document.querySelector('.input').addEventListener('keydown', (e) => {
// 	if (e.code == 'Enter') {
// 		submitForm();
// 	}
// });

function inputChanged(e) {
	if (e.code == 'Enter') {
		submitForm();
	}
}

// console.log(document.querySelector('.one').innerText);
// console.log(document.querySelector('.one ~ div').innerText);
console.log(document.querySelector('[user-id]').innerHTML);
console.log(document.querySelectorAll('.one')[0].innerText);
console.log(document.getElementsByClassName('one')[1].innerText);

// console.log(document.querySelector('#two').innerHTML);
console.log(document.getElementById('two').innerHTML);
