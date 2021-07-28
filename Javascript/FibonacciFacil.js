/*


A seguinte sequência de números 0 1 1 2 3 5 8 13 21... é conhecida como série de Fibonacci. Nessa sequência, cada número, depois dos 2 primeiros, é igual à soma dos 2 anteriores. Escreva um algoritmo que leia um inteiro N (N < 46) e mostre os N primeiros números dessa série.

Entrada

O arquivo de entrada contém um valor inteiro N (0 < N < 46).

Saída

Os valores devem ser mostrados na mesma linha, separados por um espaço em branco. Não deve haver espaço após o último valor.

*/

let N = 6; //parseInt(gets());
let calc = [];
let res = [];

for ( let i = 0; i < N; i ++ ) {

    if (i < 2) {
        calc[i] = i;
    }
    else {
        calc[i] = calc[i - 2] + calc[i - 1];
    }
    
    res += calc[i];
}
res = res.split("").join(" ");
console.log(typeof(res));
console.log(res);


