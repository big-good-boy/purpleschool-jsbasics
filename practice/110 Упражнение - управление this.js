'use strict';

function removePassword(reset) {
	if (reset)
		this.password = undefined;
	else
		this.password = 1;
}

const user = {
	name: 'John',
	password: 'querty'
}

console.log(user);

// const resetPass = removePassword;
// resetPass.call(user, true);

const resetPass = removePassword.bind(user, true);
resetPass();

console.log(user);
