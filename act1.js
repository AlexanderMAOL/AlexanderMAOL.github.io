document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault();  // Previene el comportamiento por defecto del formulario

    // Obtener el valor del capital ingresado
    var dn = parseFloat(document.getElementById('capital').value);
    
    // Validar el valor del capital
    if (dn < 0 || isNaN(dn) || dn === "") {
        alert("Por favor, ingrese un número válido");
        return; 
    }

    // Calcular el dinero ganado en un mes
    const pred = dn * 0.02;
    
    // Mostrar el resultado en el span con id "prediccion"
    document.getElementById("prediccion").innerText = pred.toFixed(2);
});
