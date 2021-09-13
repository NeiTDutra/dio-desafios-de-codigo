/*

Leia 6 valores. Em seguida, mostre quantos destes valores digitados foram positivos. Na próxima linha, deve-se mostrar a média de todos os valores positivos digitados, com um dígito após o ponto decimal.

Entrada

A entrada contém 6 números que podem ser valores inteiros ou de ponto flutuante. Pelo menos um destes números será positivo.

Saída

O primeiro valor de saída é a quantidade de valores positivos. A próxima linha deve mostrar a média dos valores positivos digitados.

*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let positives = [];
let somaPositivos = 0.0;
let qPositivos = 0;

for (let i = 0; i < 6 ; i++) {
  
  let entrada = Number(lines.shift());
	
  if ( entrada > 0.0 ) {
    
    positives.push(entrada);
    qPositivos ++;
  }
}

somaPositivos = positives.reduce( (acu, el, ind, arr) => {
  
  return acu += el;
}, 0);

let average = somaPositivos / qPositivos;

console.log( qPositivos+ " valores positivos");
console.log(average.toFixed(1));
