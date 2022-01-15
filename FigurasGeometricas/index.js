import {
	perimetroCuadrado,
	areaCuadrado,
	perimetroTriangulo,
	areaTriangulo,
	perimetroCirculo,
	areaCirculo,
} from '../util.js';

const d = document;

const resultSquare = returnElementHtml('container__card-resulCuadrado');
const resultTraingle = returnElementHtml('container__card-resulTringulo');
const resultCricle = returnElementHtml('container__card-resulCirculo');

d.addEventListener('click', (e) => {
	const target = e.target.id;

	if (target.includes('btnCalcularPerimetroCuadrado'))
		getResultSquare('btnCalcularPerimetroCuadrado');
	if (target.includes('btnCalcularAreaCuadrado'))
		getResultSquare('btnCalcularAreaCuadrado');

	if (target.includes('btnCalcularPerimetroTriangulo'))
		getResultTriangulo('btnCalcularPerimetroTriangulo');
	if (target.includes('btnCalcularAreaTriangulo'))
		getResultTriangulo('btnCalcularAreaTriangulo');

	if (target.includes('btnCalcularPerimetroCirculo'))
		getResultCircle('btnCalcularPerimetroCirculo');
	if (target.includes('btnCalcularAreaCirculo'))
		getResultCircle('btnCalcularAreaCirculo');
});

function getResultSquare(type) {
	const valueInputSquare = returnValueOfElementHtml('inputTringulo');

	const isExistElement = returnElementHtml('ElementResulCuadrado');
	if (isExistElement) resultSquare.removeChild(isExistElement);

	let resultElement = d.createElement('h4');
	resultElement.id = 'ElementResulCuadrado';

	if (valueInputSquare <= 0) {
		resultElement.innerHTML = `El valor ingresado no puede ser negativo, vacio o  igual a ceo`;
		return resultSquare.appendChild(resultElement);
	}

	if (type == 'btnCalcularPerimetroCuadrado') {
		const result = perimetroCuadrado(valueInputSquare);

		resultElement.innerHTML = `El perimetro del cuadrado es: ${result}`;
		resultSquare.appendChild(resultElement);
	}
	if (type == 'btnCalcularAreaCuadrado') {
		const result = areaCuadrado(valueInputSquare);

		resultElement.innerHTML = `El Area del cuadrado es: ${result}`;
		resultSquare.appendChild(resultElement);
	}
}
function getResultTriangulo(type) {
	const valueSideA = returnValueOfElementHtml('sideA');
	const valueSideB = returnValueOfElementHtml('sideB');
	const valueBase = returnValueOfElementHtml('Base');

	const isExistElement = returnElementHtml('ElementResulTriangle');
	if (isExistElement) resultTraingle.removeChild(isExistElement);

	let resultElement = d.createElement('h4');
	resultElement.id = 'ElementResulTriangle';

	if (valueSideA <= 0 || valueSideB <= 0 || valueBase <= 0) {
		resultElement.innerHTML = `El valor ingresado no puede ser negativo,vacio o igual a cero`;
		return resultTraingle.appendChild(resultElement);
	}

	if (type == 'btnCalcularPerimetroTriangulo') {
		const result = perimetroTriangulo(valueSideA, valueSideB, valueBase);

		resultElement.innerHTML = `El Perimetro del Triangulo es: ${result}`;
		resultTraingle.appendChild(resultElement);
	}
	if (type == 'btnCalcularAreaTriangulo') {
		const result = areaTriangulo(valueSideA, valueSideB, valueBase);

		resultElement.innerHTML = `El Area del Triangulo es: ${result}`;
		resultTraingle.appendChild(resultElement);
	}
}
function getResultCircle(type) {
	const valueRadio = returnValueOfElementHtml('inputCirculo');

	const isExistElement = returnElementHtml('ElementResulCircle');
	if (isExistElement) resultCricle.removeChild(isExistElement);

	let resultElement = d.createElement('h4');
	resultElement.id = 'ElementResulCircle';

	if (valueRadio <= 0) {
		resultElement.innerHTML = `El valor ingresado no puede ser negativo vacio o igual a cero`;
		return resultCricle.appendChild(resultElement);
	}

	if (type == 'btnCalcularPerimetroCirculo') {
		const result = perimetroCirculo(valueRadio);

		resultElement.innerHTML = `El Perimetro del Circulo es: ${result}`;
		resultCricle.appendChild(resultElement);
	}
	if (type == 'btnCalcularAreaCirculo') {
		const result = areaCirculo(valueRadio);

		resultElement.innerHTML = `El Area del Circulo es: ${result}`;
		resultCricle.appendChild(resultElement);
	}
}

function returnValueOfElementHtml(params) {
	return d.getElementById(params).value;
}

function returnElementHtml(params) {
	return d.getElementById(params);
}
