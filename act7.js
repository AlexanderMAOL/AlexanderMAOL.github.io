document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();  

    var hr = parseFloat(document.getElementById('horas').value);
    var su = parseFloat(document.getElementById("Sueldo").value);
    const spa = document.getElementById("total");
    const spaa = document.getElementById("tot");
    const mes = su * hr;
    const mas= su *40;
    const suExtra = su * 2;     
    const hx = hr - 40; 
    const pagoExtra = suExtra * hx; 
    const pagoTotal = mas + pagoExtra; 



    // Validaciones
    if (isNaN(hr) || hr < 0) {
        alert("Por favor, ingrese las horas correctamente.");
        return; 
    }

    if (isNaN(su) || su < 0) {
        alert("Por favor, ingrese el sueldo correctamente.");
        return; 
    }

    // Cálculos
    if (hr <= 40) {
        spa.textContent = "No hay horas extra";
        spaa.textContent = mes.toFixed(2); 
    } else if (hr > 40 && hr <= 48) {
        spa.textContent = pagoExtra.toFixed(2); 
        spaa.textContent = pagoTotal.toFixed(2); 
    }else {
        const suExtrax = su * 3;     
        const hxx = hr - 48; 
        const mis = suExtra* 8;
        const pagoExtrax = (suExtrax * hxx)+ (mis); 
        const pagoTotalx = mas + pagoExtrax; 

        spa.textContent = pagoExtrax.toFixed(2); 
        spaa.textContent = pagoTotalx.toFixed(2); 
    }
});
