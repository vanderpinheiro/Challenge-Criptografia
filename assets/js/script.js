var encripta = document.querySelector('.criptografia');
var descripta = document.querySelector('.descriptografia');
var copia = document.querySelector('.copiar');

function codificaTexto() {
  var inputTexto = document.querySelector('textarea').value.toLowerCase();
  var textoCriptografado = inputTexto
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');

  document.getElementById('texto-resultado').innerHTML =
    '<textarea readonly id="output-texto">' +
    textoCriptografado +
    '</textarea>';
}

function descodificaTexto() {
  var inputTexto = document.querySelector('textarea').value;
  var textoDescriptografado = inputTexto
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');

  document.getElementById('texto-resultado').innerHTML =
    '<textarea readonly id="output-texto">' +
    textoDescriptografado +
    '</textarea>';
}

function copiarTexto() {
  var texto = document.getElementById('output-texto');
  texto.select();
  document.execCommand('copy');
  alert('Texto copiado com sucesso');
}

encripta.onclick = codificaTexto;
descripta.onclick = descodificaTexto;
copia.onclick = copiarTexto;
