/*

Desafio

Você terá o desafio de ler um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364. 

Entrada

O arquivo de entrada contém um valor inteiro.

Saída

Imprima a saída conforme exemplo fornecido.

*/

let totalDeDias = parseInt(gets())

let anos = parseInt(totalDeDias / 365);
console.log(anos+' ano(s)');
// console.log(parseInt(totalDeDias % 365));

let meses = (parseInt(totalDeDias % 365)) / 30;
console.log(parseInt(meses)+' mes(es)');

let dias = ((totalDeDias % 365) % 30);
console.log(parseInt(dias)+' dia(s)');

