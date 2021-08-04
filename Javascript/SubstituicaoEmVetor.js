/*

Desafio

Faça um programa que leia um vetor X[10]. Substitua a seguir, todos os valores nulos e negativos do vetor X por 1. Em seguida mostre o vetor X.

Entrada

A entrada contém 10 valores inteiros, podendo ser positivos ou negativos.

Saída

Para cada posição do vetor, escreva "X[i] = x", onde i é a posição do vetor e x é o valor armazenado naquela posição.

*/

let n = [];
// let input = gets();
// console.log(typeof(input));

for (let i = 0; i < 10; i++) {
 let input = gets();
  n.push(input);
}

for (let i = 0; i < 10; i++) {
  console.log(`X[${i}] = ${n[i] <= 0 ? 1 : n[i]}`);
}

