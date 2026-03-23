function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function area_cuadrado(lado) {
    return lado * lado;
}
function area_triangulo(base,altura){
    return (base * altura) /2;
}

function area_circulo(radio){
    return Math.PI * radio * radio;
}
module.exports = {
    suma,
    resta,
    multiplicar,
    area_cuadrado,
    area_triangulo,
    area_circulo
};
