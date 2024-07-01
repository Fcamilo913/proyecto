//una funcion que pregunte las horas trabajadas de un trabadador, para saber su salario del mes y del año


function calcularSalario(horasTrabajadas) {
 
horastrab=prompt('Ingrese el numero de horas trabajadas');

valorhora=prompt('Ingrese el valor de la hora');


salarioMes=parseInt(horastrab)*parseInt(valorhora);

document.write('Su salario del mes es: '+salarioMes);
}

calcularSalario();