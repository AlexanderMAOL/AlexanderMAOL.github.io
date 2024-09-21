document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();  

    var pr = parseFloat(document.getElementById('un').value);
    var se = parseFloat(document.getElementById("do").value);
    var te = parseFloat(document.getElementById("tre").value);
    var exa = parseFloat(document.getElementById('ex').value);
    var tra = parseFloat(document.getElementById("tr").value);

    // Validaciones
    if (isNaN(pr) || pr < 0) {
        alert("Por favor, ingrese una calificación válida para el primer parcial.");
        return; 
    }

    if (isNaN(se) || se < 0) {
        alert("Por favor, ingrese una calificación válida para el segundo parcial.");
        return; 
    }

    if (isNaN(te) || te < 0) {
        alert("Por favor, ingrese una calificación válida para el tercer parcial.");
        return; 
    }

    if (isNaN(exa) || exa < 0) {
        alert("Por favor, ingrese una calificación válida para el examen final.");
        return; 
    }

    if (isNaN(tra) || tra < 0) {
        alert("Por favor, ingrese una calificación válida para el trabajo final.");
        return; 
    }

    // Cálculos
    const promedio = (pr + se + te) / 3;
    const total = (promedio * 0.55) + (exa * 0.3) + (tra * 0.15);

    // Mostrar resultado
    document.getElementById("total").innerText = total.toFixed(2);
});
