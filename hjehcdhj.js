//funcion para saber cuantos numeros pares e impares en un rango de numeros

function sabernumeroparimpar (rango) {

let rango=prompt("Ingrese el rango de numeros separados por un espacio")

for (let i = 0; i < rango.split(" ").length; i++) {
    let numero=parseInt(rango.split(" ")[i]);
    
    if (numero % 2 == 0) {
        document.write(numero + " es par");
    } else {
            document.write(numero + " es impar");
    }
    document.write("<br>");

}
}
sabernumeroparimpar();