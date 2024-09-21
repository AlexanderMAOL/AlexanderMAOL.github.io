
document.getElementById("form3").addEventListener("submit", function(event) {
    event.preventDefault();  

    var v= parseFloat(document.getElementById('valor').value);
    
    // Validaciones
    if (v < 0 || isNaN(v) || v === "") {
        alert("Por favor, ingrese un dato válido.");
        return; 
    }

  
    const to = v* 0.15;


    // Mostrar resultado
    document.getElementById("total").innerText = `$${to.toFixed(2)}`;
});