// Validación de campos
function validateName() {
    const name = document.getElementById("name").value;
    if (name.trim() === "") {
        alert("El nombre es obligatorio.");
        return false;
    }
    return true;
}

function validateEmail() {
    const email = document.getElementById("email").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === "") {
        alert("El email es obligatorio.");
        return false;
    } else if (!emailRegex.test(email)) {
        alert("El email no es válido.");
        return false;
    }
    return true;
}

function validateComments() {
    const comments = document.getElementById("comments").value;
    if (comments.trim() === "") {
        alert("El campo de comentarios es obligatorio.");
        return false;
    } else if (comments.length > 50) {
        alert("El campo de comentarios no debe exceder los 50 caracteres.");
        return false;
    }
    return true;
}

function validatePassword() {
    const password = document.getElementById("password").value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (password.trim() === "") {
        alert("La contraseña es obligatoria.");
        return false;
    } else if (!passwordRegex.test(password)) {
        alert("La contraseña debe tener al menos 6 caracteres, incluyendo una letra mayúscula, una minúscula y un dígito.");
        return false;
    }
    return true;
}

function validateTerms() {
    const terms = document.getElementById("terms").checked;
    if (!terms) {
        alert("Debe aceptar las condiciones del servicio.");
        return false;
    }
    return true;
}

// Asignar validaciones al perder el foco
document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("comments").addEventListener("blur", validateComments);
document.getElementById("password").addEventListener("blur", validatePassword);

// Validación al enviar el formulario
document.getElementById("registerForm").addEventListener("submit", function(event) {
    // Evitar el envío si alguna validación falla
    if (!validateName() || !validateEmail() || !validateComments() || !validatePassword() || !validateTerms()) {
        event.preventDefault();  // Detener el envío del formulario
    }
});
