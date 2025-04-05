// Parte fixa do exemplo
const numerosFixos = [1, 2, 3, 4, 5];
const dobradosFixos = numerosFixos.map(function(numero) {
  return numero * 2;
});
// A explicação já está no HTML, então não precisa alterar ela via JS

// Parte interativa
document.getElementById('executar').addEventListener('click', function () {
  const entrada = document.getElementById('entrada').value;

  const numeros = entrada
    .split(',')
    .map(n => n.trim())
    .filter(n => n !== '')
    .map(Number);

  if (numeros.some(isNaN)) {
    document.getElementById('saida').innerHTML = `
      <p style="color: red;">Por favor, insira apenas números válidos separados por vírgula.</p>
    `;
    return;
  }

  const dobrados = numeros.map(n => n * 2);

  document.getElementById('saida').innerHTML = `
    <p><strong>Array digitado:</strong> [${numeros.join(', ')}]</p>
    <p><strong>Resultado com <code>map()</code>:</strong> [${dobrados.join(', ')}]</p>
  `;
});
