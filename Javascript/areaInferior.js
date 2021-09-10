/*


Leia um caractere maiúsculo, que indica uma operação que deve ser realizada e uma matriz M[12][12].
Em seguida, calcule e mostre a soma ou a média considerando somente aqueles elementos que estão na 
área inferior da matriz, conforme ilustrado abaixo (área verde).
 

Entrada

A primeira linha de entrada contem um único caractere Maiúsculo O ('S' ou 'M'), indicando a operação 
(Soma ou Média) que deverá ser realizada com os elementos da matriz. Seguem os 144 valores de ponto 
flutuante de dupla precisão (double) que compõem a matriz.

Saída

Imprima o resultado solicitado (a soma ou média), com 1 casa após o ponto decimal.

*/

// file: Área inferior
const isSum = gets();

const xL = 12, yL = 12;

let matriz = [];

let sum = 0;

for ( let x = 0; x < xL; x ++ ) {
  matriz[x] = [];
  for ( let y = 0; y < yL; y ++ ) {
    matriz[x][y] = parseFloat(gets());
  }
}

for (let i = 0; i < 12; ++i) {
	for (let j = 0; j < 12; ++j) {
		if ((i > 6) && (j < i) && (j > 11 - i))
		  sum += matriz[i][j];
	}
}

if ( isSum != 'S' ) {
  sum = sum / 30;
}

console.log(sum.toFixed(1));
