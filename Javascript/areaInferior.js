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
const input = `M
23
-8
-93
46
84
-94
-56
-88
20
-15
-8
44
-38
-88
-63
-96
-30
82
70
-10
1
-6
-16
-8
-38
-40
-99
83
19
66
-47
-9
71
17
-21
59
-16
35
49
92
-70
39
10
41
67
-60
92
-31
45
13
-86
-87
91
29
-3
4
-19
27
29
60
14
-29
33
91
97
-67
73
94
86
41
-44
79
13
5
60
7
64
-98
34
-24
11
-2
-36
-1
-75
24
-51
88
-79
93
-6
-38
-48
34
-27
15
-68
91
2
-87
-7
-90
76
-66
47
92
-52
-22
10
-21
-29
68
-17
-26
-76
-92
-5
91
98
19
60
91
-20
80
80
-93
73
98
-30
-69
93
-73
-2
-67
52
36
-38
-64
70
28
2
-72
53
-67`.split('\n');
const gets = _ => input.shift().trim();

const isSum = String(gets());

const xL = 12, yL = 12;

let matriz = [];

let sum = 0;

for ( let x = 0; x < xL; x ++ ) {
  matriz[x] = [];
  for ( let y = 0; y < yL; y ++ ) {
    matriz[x][y] = Number(gets());
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

// Abaixo outra solução (https://web.digitalinnovation.one/topics/desafio-aritmetico-em-javascript-2?
// tab=forum&topic_type=all&back=%2Ftrack%2Fcapgemini-fullstack-java-and-angular&back_order=newest&back_page=2&page=1&order=oldest)

const operacao = gets();
const isSum = operacao === "S";

const xL = 12, yL = 12;
let sum = 0.0, av = 0.0;
let linha = gets();

if (linha.length > 5) {

 for (var y = 0; y < yL; y++) {
 
  if (y != 0) {

   linha = gets();
  }

  let numeros = linha.trim().split(/[\s,]+/);
  
  for (var x = 0; x < xL; x++) {
  
   if ((y > 6) && (x < y) && (x > 11 - y)) {

    var valor = Number(numeros[x]);
    sum += valor;
    ++av;
   }
  }
 }
}
else {

 var contagem = 1;
 
 for (var y = 0; y < yL; y++) {
  for (var x = 0; x < xL; x++) {
  
   var valor = 0;
   
   if (contagem == 1) {

    valor = Number(linha);
    primeiroloop = false;
   }
   else {
   
    linha = gets().trim();
    valor = Number(linha);
   }
   
   if ((y > 6) && (x < y) && (x > 11 - y)) {
   
    sum += valor;
    ++av;
   }
   
   contagem++
  }
 }
}

console.log((sum / (isSum ? 1 : av)).toFixed("1"));

