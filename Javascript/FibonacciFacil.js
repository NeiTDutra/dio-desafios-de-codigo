/*


A seguinte sequência de números 0 1 1 2 3 5 8 13 21... é conhecida como série de Fibonacci. Nessa sequência, cada número, depois dos 2 primeiros, é igual à soma dos 2 anteriores. Escreva um algoritmo que leia um inteiro N (N < 46) e mostre os N primeiros números dessa série.

Entrada

O arquivo de entrada contém um valor inteiro N (0 < N < 46).

Saída

Os valores devem ser mostrados na mesma linha, separados por um espaço em branco. Não deve haver espaço após o último valor.

*/

let N = 33; //parseInt(gets());
let calc = [];
let res = [];

for ( let i = 0; i < N; i ++ ) {

    if (i < 2) {
        calc[i] = i;
    }
    else {
        calc[i] = res[i - 2] + res[i - 1];
    }
    res.push(calc[i]);
}
res = res.join(" ");
console.log(typeof(res));
console.log(res);
/*
// codigo do desafio na dio incompleto

let input = 33;//gets();

const fib = n => {
  if (            ) {
    return [0, 1];
  } 
  else {
    const s = fib(         );
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

const index = Number(lines.shift()) - 1;

const sequence = fib(index).join(" ");

console.log(sequence);
*/

