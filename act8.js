document.getElementById("form8").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevenir el envío del formulario

    var salario = parseFloat(document.getElementById("salario").value);  // Obtener el salario
    var antiguedad = document.getElementById("deporte").value;  // Obtener la opción seleccionada
    var resultado = document.getElementById("total");  // Donde se mostrará el resultado

    // Validaciones básicas
    if (isNaN(salario) || salario <= 0) {
        alert("Por favor, ingrese un salario válido.");
        return;
    }

    // Operaciones basadas en la opción seleccionada
    if (antiguedad === "ninguno") {
        resultado.textContent = "Seleccione una opcion valida por favor";
    } else if (antiguedad === "uno") {
        const utilidad = salario * 0.05;
        resultado.textContent = utilidad.toFixed(2);  // 5% de utilidad
    } else if (antiguedad === "dos") {
        const utilidad = salario * 0.07;
        resultado.textContent = utilidad.toFixed(2);  // 7% de utilidad
    } else if (antiguedad === "tres") {
        const utilidad = salario * 0.10;
        resultado.textContent = utilidad.toFixed(2);  // 10% de utilidad
    } else if (antiguedad === "cuatro") {
        const utilidad = salario * 0.15;
        resultado.textContent = utilidad.toFixed(2);  // 15% de utilidad
    } else if (antiguedad === "cinco") {
        const utilidad = salario * 0.20;
        resultado.textContent = utilidad.toFixed(2);  // 20% de utilidad
    } else {
        resultado.textContent = "Opción no válida";
    }
});
