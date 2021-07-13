/*

Desafio

Crie um programa onde você receberá valores inteiros não negativos como entrada.

Ordene estes valores de acordo com o seguinte critério:

    Primeiro os Pares
    Depois os Ímpares

Você deve exibir os pares em ordem crescente e na sequência os ímpares em ordem decrescente.

Entrada

A primeira linha de entrada contém um único inteiro positivo N (1 < N < 105) Este é o número de linhas de entrada que vem logo a seguir. As próximas N linhas terão, cada uma delas, um valor inteiro não negativo.

*/
//Declara as variáveis
//#####################################################################

let n_lines = 11;//gets();
let par = [];
let impar = [];

//Inicia um loop no n_lines(número de linhas) e separa pares de ímpares
//de acordo com a condição do if
//#####################################################################

for(let i = n_lines; i > 0; i --) {
  
  let num = 7 + i * 13;//gets();
  
  if(num % 2 == 0) {
    
    par.push(num);
    par.sort( (a, b) => {
      
      return a - b;
    });
  } 
  else {
    
    impar.push(num);
    impar.sort( (a, b) => {
      
      return b - a;
    });
  } 
  
}

//Imprime no console os números pares
//####################################################################

let parm = par.map( (np) => {
  
  console.log(np);
});

//Imprime no console os números ímpares
//####################################################################

let imparm = impar.map( (ni) => {
  
  console.log(ni);
});


