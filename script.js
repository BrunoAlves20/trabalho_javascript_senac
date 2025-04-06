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

document.getElementById('filtrar').addEventListener('click', function () {
  const dados = document.getElementById('dados').value;

  const numeros = dados
    .split(',')
    .map(n => n.trim())
    .filter(n => n !== '')
    .map(Number);

  if (numeros.some(isNaN)) {
    document.getElementById('saidaFiltro').innerHTML = `
      <p style="color: red;">Por favor, insira apenas números válidos separados por vírgula.</p>
    `;
    return;
  }

  const pares = numeros.filter(n => n % 2 === 0);

  document.getElementById('saidaFiltro').innerHTML = `
    <p><strong>Array digitado:</strong> [${numeros.join(', ')}]</p>
    <p><strong>Resultado com <code>filter()</code> (números pares):</strong> [${pares.join(', ')}]</p>
  `;
});

document.getElementById('contar').addEventListener('click', function () {
  const texto = document.getElementById('itens').value;

  const itens = texto
    .split(',')
    .map(n => n.trim())
    .filter(n => n !== '');

  const contagem = itens.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  document.getElementById('saidaReduce').innerHTML = `
    <p><strong>Array digitado:</strong> [${itens.join(', ')}]</p>
    <p><strong>Contagem de itens com <code>reduce()</code>:</strong> ${JSON.stringify(contagem)}</p>
  `;
});

document.getElementById('mesclar').addEventListener('click', function () {
  const arr1 = document.getElementById('array1').value;
  const arr2 = document.getElementById('array2').value;

  const a = arr1.split(',').map(n => n.trim()).filter(n => n !== '').map(Number);
  const b = arr2.split(',').map(n => n.trim()).filter(n => n !== '').map(Number);

  if (a.some(isNaN) || b.some(isNaN)) {
    document.getElementById('saidaSpread').innerHTML = `
      <p style="color: red;">Por favor, insira apenas números válidos nos dois arrays.</p>
    `;
    return;
  }

  const mesclado = [...a, ...b];

  document.getElementById('saidaSpread').innerHTML = `
    <p><strong>Array 1:</strong> [${a.join(', ')}]</p>
    <p><strong>Array 2:</strong> [${b.join(', ')}]</p>
    <p><strong>Resultado com <code>spread(...)</code>:</strong> [${mesclado.join(', ')}]</p>
  `;
});