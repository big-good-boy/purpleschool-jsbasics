/* проверить является ли это номером телефона России */
/* верные */
const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7(910)3235356';
const num4 = '+7(910) 323-53-56';
const num5 = '  +7(910) 323-53-56  ';
/* не верные */
const num1Error = '89103235';
const num2Error = '+7d910d323-53-56';
const num3Error = '9+7103235356';
const num4Error = '89103g35356';

/* моё решение */
function parser(number) {
	number = number.trim();
	if (  number.length < 11
		|| (number[0]   !== '8'
		&&  number[0]   !== '+'))
		return false;
	for (const iterator of number) {
		if (!isNaN(Number(iterator))
		|| iterator === '+'
		|| iterator === '('
		|| iterator === ')'
		|| iterator === '-')
		continue;
		else
		return false;
	}
	return true;
}
	
/* решение из видео */
function isPhoneNumber(num) {
	num = num.trim();
	num = num.replace('+7', '8');
	if (!num.startsWith('8'))
		return false;
	num = num.replaceAll('(', '');
	num = num.replaceAll(')', '');
	num = num.replaceAll(' ', '');
	num = num.replaceAll('-', '');
	if (num.length != 11)
		return false;
	let onlyNumber = true;
	for (const char of num)
		if (isNaN(Number(char))) {
			onlyNumber = false;
			break
		}
	return onlyNumber;
}
