function validar(form){
    let nombre =form.nombre.value.trim()
 if (nombre == ""){
    alert("Por favor, ingrese su nombre");
    return false
 }   

 let edad=form.edad.value.trim()
 if (edad===""|| isNaN(edad) || edad<0){
    alert("Por favor, ingrese una edad valida")
    return false; 
 }
let sexo = form.sexo.value;
if (!form.sexo.value) {
    alert("Por favor, seleccione un sexo");
    return false;
}
let deporte = form.deporte.value;
if (deporte === "Ninguno") {
    alert("Por favor, seleccione un deporte");
    return false;
}
}
