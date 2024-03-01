
function sumar(a, b){
    return a + b
}

const r = sumar(5,3);
console.log(r);

//ejemplo avanzado

let total = 0;
function agregarCarrito(precio) {
    return total += precio
}
function calcularImpuesto(total) {
    return total
}

total = agregarCarrito(300)
console.log(total);
