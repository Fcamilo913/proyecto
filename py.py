# Matriz que pregunte el numero de filas y columnas de la matriz para luego imprimir la matriz
def matriz():
    filas = int(input("Ingrese el numero de filas: "))
    columnas = int(input("Ingrese el numero de columnas: "))

    matriz = []

    for i in range(filas):
        matriz.append([])
        for j in range(columnas):
            valor = int(input(f"Ingrese el valor para la posición [{i}][{j}]: "))
            matriz[i] [j].append(valor)

    print("La matriz resultante es:")
    for i in range(filas):
        for j in range(columnas):
            print(matriz[i][j], end=" ")
        print()

matriz()
