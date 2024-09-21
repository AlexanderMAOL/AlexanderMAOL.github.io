function palabrasANumeros(arr) {
    const mapaNumeros = {
        "cero": 0,
        "uno": 1,
        "dos": 2,
        "tres": 3,
        "cuatro": 4,
        "cinco": 5,
        "seis": 6,
        "siete": 7,
        "ocho": 8,
        "nueve": 9
    };
    
    return arr.map(palabra => mapaNumeros[palabra.toLowerCase().trim()] !== undefined ? mapaNumeros[palabra.toLowerCase().trim()] : -1);
}


function convertirPalabrasANumeros() {
    const input = document.getElementById("palabras").value;
    if (input === "") {
        alert("Por favor, ingrese algunas palabras.");
        return;
    }
    const palabrasArray = input.split(","); // Separar las palabras por comas
    const resultado = palabrasANumeros(palabrasArray); // Llamar a la función
    document.getElementById("resultado").innerText = "Resultado: " + resultado.join(", "); // Mostrar el resultado
}