
const metodoPago = 'cheque';

switch (metodoPago){
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`)
        break;
    default:
        console.log(`A un no selecciono metodo de pago`)
        break;
};
