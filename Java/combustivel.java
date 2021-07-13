/*

Desafio

Rubens quer calcular e mostrar a quantidade de litros de combustível gastos em uma viagem de carro, sendo que seu carro faz 12 KM/L. Como ele não sabe fazer um programa que o auxilie nessa missão, ele te pede ajuda. Para efetuar o cálculo, deve-se fornecer o tempo gasto em horas na viagem e a velocidade média durante a mesma em km/h. Assim, você conseguirá passar para Rubens qual a distância percorrida e, em seguida, calcular quantos litros serão necessários para a viagem que ele quer fazer. Mostre o valor com 3 casas decimais após o ponto.

Entrada

O arquivo de entrada contém dois inteiros. O primeiro é o tempo gasto na viagem em horas e o segundo é a velocidade média durante a mesma em km/h.

Saída

Imprima a quantidade de litros necessária para realizar a viagem, com três dígitos após o ponto decimal

*/

import java.util.Scanner;

public class Main{
  
	public static void main(String[] args){

                //continue a solucao

		Scanner scan = new Scanner(System.in);
	  int t = scan.nextInt();
	  int v = scan.nextInt();


		System.out.printf("%.3f\n", (t *  v)/12.0);
	}
}
