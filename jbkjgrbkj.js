function descuentocompra() {

valor_compra = parseFloat(prompt("Ingrese el valor de la compra: "));

descuento=0;

if (valor_compra >= 10000) {
    descuento = 0.15;}
else {
    descuento = 0;}
}

descuento_total = valor_compra * descuento;

alert("El descuento es de: " + descuento_total);

descuentocompra();