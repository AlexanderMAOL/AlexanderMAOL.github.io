document.getElementById('dniForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    
    var dni = parseInt(document.getElementById('dni').value);
    var userLetter = document.getElementById('letter').value.toUpperCase();

    var resultDiv = document.getElementById('result');

    // Validar el número de DNI
    if (dni < 0 || dni > 99999999) {
        alert("El número de DNI proporcionado no es válido.")
        return;
    }

    // Calcular la letra correspondiente
    var calculatedLetter = letras[dni % 23];

    // Comparar con la letra indicada por el usuario
    if (calculatedLetter !== userLetter) {
        alert ("La letra proporcionada no es correcta. La letra correcta es: " + calculatedLetter)
    } else {
       alert ("El número y la letra del DNI son correctos.")
    }
    let dni =form.dni.value.trim()
     if (nombre == ""){
    alert("Por favor, un numero de DNI ");
    return false
});
