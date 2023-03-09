const url = "https://purpleschool.ru/course/javascript-basics";

function parsingURL(url) {
	let [protocol, _, host, ...path] = url.split('/');
	if (
		(protocol !== 'https:' && protocol !== 'http:')
		|| !host.includes('.')
	)
		return;

	protocol = protocol.split(':')[0];
	path = '/' + path.join('/');

	console.log(protocol);
	console.log(host);
	console.log(path);
}
