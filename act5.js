document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevenir el comportamiento de envío del formulario

    // Obtener la fecha de nacimiento del input
    const fechaNacimiento = new Date(document.getElementById("fechaNacimiento").value);
    
    if (!fechaNacimiento.getTime()) {
        // Verificar si la fecha es válida
        document.getElementById("resultado").innerText = "Por favor, ingrese una fecha válida.";
        return;
    }
    
    // Obtener la fecha actual
    const hoy = new Date();
    
    // Calcular la edad
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }
    
    // Mostrar la edad calculada
    document.getElementById("resultado").innerText = "La edad es: " + edad + " años.";
});
