//codigo cuadrado:
const PI = Math.PI;
function perimetroCuadrado(lado) {
	return (lado * 4).toFixed(2);
}

function areaCuadrado(lado) {
	return (lado * lado).toFixed(2);
}

//codigo triangulo:
function perimetroTriangulo(lado1, lado2, base) {
	return (lado1 + lado2 + base).toFixed(2);
}

function areaTriangulo(lado1, lado2, base) {
	const sP = (lado1 + lado2 + base) / 2;
	return Math.sqrt(sP * (sP - lado1) * (sP - lado2) * (sP - base)).toFixed(2);
}

//codigo circulo:

function diametroCirculo(radio) {
	return (radio * 2).toFixed(2);
}

function perimetroCirculo(radio) {
	const diametro = diametroCirculo(radio);
	return (diametro * PI).toFixed(2);
}

function areaCirculo(radio) {
	return (radio * radio * PI).toFixed(2);
}

export {
	perimetroCuadrado,
	areaCuadrado,
	perimetroTriangulo,
	areaTriangulo,
	diametroCirculo,
	perimetroCirculo,
	areaCirculo,
};
