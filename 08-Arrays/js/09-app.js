const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700}
];

for (let i=0; i<carrito.length; i++){
    console.log(carrito[i])
};

carrito.forEach( function(producto) {
    console.log(`${producto.nombre} - precio:${producto.precio}`);
} )
