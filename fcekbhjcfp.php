<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Matriz en PHP</title>
</head>
<body>
    <h2>Ingrese los valores para la matriz</h2>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
        <label for="filas">Número de filas:</label>
        <input type="text" id="filas" name="filas"><br><br>
        <label for="columnas">Número de columnas:</label>
        <input type="text" id="columnas" name="columnas"><br><br>
        <input type="submit" value="Crear Matriz">
    </form>

    <?php
    // Función para validar la entrada (evita ataques XSS)
    function validar_entrada($dato) {
        $dato = trim($dato);
        $dato = stripslashes($dato);
        $dato = htmlspecialchars($dato);
        return $dato;
    }

    // Si se envió el formulario
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Obtener y validar el número de filas y columnas
        $filas = validar_entrada($_POST["filas"]);
        $columnas = validar_entrada($_POST["columnas"]);

        // Inicializar la matriz vacía
        $matriz = [];

        // Crear filas y llenar la matriz
        for ($i = 0; $i < $filas; $i++) {
            $matriz[$i] = [];  // Agregamos una lista vacía como nueva fila
            for ($j = 0; $j < $columnas; $j++) {
                echo "<p>Ingrese el valor para la posición [$i][$j]:</p>";
                echo "<input type='text' name='valor[$i][$j]'>";
            }
            echo "<br>";
        }

        // Mostrar la matriz resultante
        echo "<h2>La matriz resultante es:</h2>";
        echo "<table border='1'>";
        for ($i = 0; $i < $filas; $i++) {
            echo "<tr>";
            for ($j = 0; $j < $columnas; $j++) {
                echo "<td>{$matriz[$i][$j]}</td>";
            }
            echo "</tr>";
        }
        echo "</table>";
    }
    ?>

</body>
</html>
