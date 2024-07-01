//funcion para saber el salario mensual de N trabajadores apartir de muplicacion de horas y valor de la hora


function calcularSalarioMensual(n_trabajadores, dias_trabajados, valorHora) {
 n_trabajadores = parseInt("ingresar el numero de trabajadores");
 
    
    for (let i = 0; i < n_trabajadores; i++) {
     horasTrabajadas = parseInt(`Ingrese horas trabajadas del trabajador ${i + 1}: `);
     dias_trabajados = parseInt("Ingrese los dias trabajados");
     salarioMensual = horasTrabajadas * horasMultiplicadas * valorHora;
     document.write(`El salario del trabajador ${i + 1} es: $${salarioMensual}`);

}
}

calcularSalarioMensual(n)