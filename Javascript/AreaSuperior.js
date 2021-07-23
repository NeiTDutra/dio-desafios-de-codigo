/*


Leia um caractere maiúsculo, que indica uma operação que deve ser realizada e uma matriz M[12][12]. Em seguida, calcule e mostre a soma ou a média considerando somente aqueles elementos que estão na área superior da matriz, conforme ilustrado abaixo (área verde).
 

Entrada

A primeira linha de entrada contem um único caractere Maiúsculo O ('S' ou 'M'), indicando a operação (Soma ou Média) que deverá ser realizada com os elementos da matriz. Seguem 144 valores com ponto flutuante de dupla precisão que compõem a matriz.

Saída

Imprima o resultado solicitado (a soma ou média), com 1 casa após o ponto decimal


// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
// Abaixo segue um exemplo de código que você pode ou não utilizar

const isSum = gets();
const xL = 12, yL = 12;

let i = [];;
let min = 1, max = 10, sum = 0.0;

for ( let x = 0; x < xL; x ++ ) {
  i[x] = [];
  
  for ( let y = 0; y < yL; y ++ ) {
    i[x][y] = parseFloat(gets());

    if ( x < 5 && y >= min && y <= max ) {
      sum += i[x][y];
    }
  }
  
  min ++;
  max --;
}

if ( isSum != 'S' && isSum === 'M') {
  sum = sum / 30;
}

console.log( sum.toFixed(1) );

*/


const isSum = 'M';//gets();// === "S";
console.log(isSum);

const xL = 12, yL = 12;

let i = [];
let count = 0;
let countC = 0;
let f = Number(1.1);

let sum = 0;//, av = 0.0;
  
let min = 1, max = 10;

for ( let x = 0; x < xL; x ++ ) {
  i[x] = [];
  for ( let y = 0; y < yL; y ++ ) {
    i[x][y] = f;//parseFloat(gets());

    if ( x < 5 && y >= min && y <= max ) {
      console.log(i[x][y]);
      sum += i[x][y];
      sum.toFixed(1);
      count ++; 
      f += 1.1;
    }
    countC ++;
  }
  min ++;
  max --;
}
if ( isSum != 'S' ) {
  sum = sum / 30;
}

console.log( sum.toFixed(1) );
console.log(count);
console.log(countC);

