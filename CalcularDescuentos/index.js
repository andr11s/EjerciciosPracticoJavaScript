import { calculateDiscount } from '../util.js';

const coupon = {
	CUPON100: 100,
	CUPON50: 50,
	CUPON10: 10,
};

const d = document;
const divMessge = loadElementHtml('divContainerMessage');
const history = [];

d.addEventListener('click', (e) => {
	const target = e.target.id;

	if (target.includes('btnDiscount')) actionBtnDiscount();

	if (target.includes('clearHistory')) clearHistory();
});

function actionBtnDiscount() {
	const inputPrice = loadElementHtml('inputPrice').value;
	const inputDiscount = loadElementHtml('inputDiscount').value;
	const inputCouponDiscount = loadElementHtml('inputCouponDiscount').value;

	const isValidate = Validate(inputPrice, inputDiscount, inputCouponDiscount);

	if (isValidate.message != '') viewMessage(isValidate);

	if (isValidate.flag) return;

	const totalDiscount = validateDiscount(
		parseInt(inputDiscount),
		coupon[inputCouponDiscount.toUpperCase()]
	);

	const result = calculateDiscount(parseInt(inputPrice), totalDiscount);

	if (typeof result != 'number')
		return viewMessage({
			flag: true,
			message: result,
		});

	console.log('> ', result);
	return viewMessage({
		flag: false,
		message: `Descuento aplicado del ${totalDiscount}%, Total a pagar $${result} `,
	});
}

function Validate(Price, Discount, couponDiscount) {
	const objValidate = {
		message: '',
		flag: false,
	};

	if (Price <= 0 || Discount <= 0 || Price == '' || Discount == '') {
		objValidate.message =
			'El precio y el valor descuento no puede estar vacio o ser negativo';
		objValidate.flag = true;

		return objValidate;
	}

	if (couponDiscount.length != 0 && !coupon[couponDiscount.toUpperCase()]) {
		objValidate.message = 'El cupon de descuento ingresado no es valido';
		objValidate.flag = true;

		return objValidate;
	}

	return objValidate;
}

function loadElementHtml(element) {
	return d.getElementById(element);
}

function viewMessage(isValidate) {
	history.unshift(isValidate);

	const newElement = d.getElementById('divContainerMessage');

	let htmlElement = '';

	history.forEach(
		(element, index) => (htmlElement += returnMessgeError(element, index))
	);

	newElement.innerHTML = htmlElement;
	console.log(history);
}

function validateDiscount(discount, couponDiscount) {
	const totalDiscount = discount + couponDiscount;

	if (!couponDiscount) return discount;

	if (discount && couponDiscount) {
		if (totalDiscount > 100) return couponDiscount;

		return totalDiscount;
	}

	if (discount == 0 && couponDiscount) return couponDiscount;
}

function returnMessgeError(params, index) {
	let { flag, message } = params;
	const typMessage = index == 0 ? 'Nuevo' : 'Antiguo';
	if (flag)
		return `<div class="error ubication">  
					<p>${message} </p>
					<p>${typMessage}</p>
		 </div>`;

	return ` <div class="succes ubication"> <p >${message}</p> <p>${typMessage}</p></div>`;
}

function clearHistory() {
	while (divMessge.firstChild) divMessge.firstChild.remove();
	history.length = 0;
}
