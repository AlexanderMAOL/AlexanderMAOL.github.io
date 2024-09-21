
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();  

    var su = parseFloat(document.getElementById('sueldo').value);
    var vn = parseFloat(document.getElementById("ventas").value);

    // Validaciones
    if (su < 0 || isNaN(su) || su === "") {
        alert("Por favor, ingrese un sueldo válido.");
        return; 
    }

    if (vn < 0 || isNaN(vn) || vn === "") {
        alert("Por favor, ingrese un número válido de ventas.");
        return; 
    }

    // Cálculos
    const ven = vn * 0.01;
    const bono = ven * su;
    const total = su + bono;

    // Mostrar resultado
    document.getElementById("ganancia").innerText = `$${total.toFixed(2)}`;
});