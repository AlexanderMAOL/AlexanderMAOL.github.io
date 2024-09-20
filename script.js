document.getElementById('dniForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    
    var dni = parseInt(document.getElementById('dni').value);
    var userLetter = document.getElementById('letter').value.toUpperCase();

    var resultDiv = document.getElementById('result');

    if (dni < 0 || dni > 99999999) {
        alert("El número de DNI proporcionado no es válido.")
        return;
    }

    var calculatedLetter = letras[dni % 23];

    if (calculatedLetter !== userLetter) {
        alert ("La letra proporcionada no es correcta. La letra correcta es: " + calculatedLetter)
    } else {
       alert ("El número y la letra del DNI son correctos.")
    }
});
