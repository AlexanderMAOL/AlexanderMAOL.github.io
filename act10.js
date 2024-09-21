function removeScriptTags() {
    const inputHtml = document.getElementById('inputHtml').value;

    // Nueva expresión regular para eliminar etiquetas <script> y su contenido
    const scriptRegex = /<script\b[^<]*>([\s\S]*?)<\/script>/gi;

    // Reemplazar las coincidencias con una cadena vacía
    const cleanedHtml = inputHtml.replace(scriptRegex, '');

    // Mostrar el resultado en el textarea
    document.getElementById('outputHtml').value = cleanedHtml;
}
