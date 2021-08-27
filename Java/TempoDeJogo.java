/*

Desafio

Tento como base a hora inicial e final de um jogo, calcule a duração do dele, sabendo que o mesmo pode começar em um dia e terminar em outro, tendo uma duração mínima de, 60 minutos e máxima de 24 horas.

Entrada

A entrada contém dois valores inteiros representando a hora de início e a hora de fim do jogo.

Saída

Apresente a duração do jogo conforme exemplo abaixo.

*/

import java.util.Scanner;

public class Problem {
	public static void main(String[] args){
	  
    Scanner scan = new Scanner(System.in);
    
		int inicio, fim, horas;
		
		inicio = scan.nextInt();
		fim = scan.nextInt();
		horas = fim - inicio;             ;

		if(horas == 0){
		  
			System.out.print("O JOGO DUROU 24 HORA(S)\n");
			
		}else if(horas < 0){
		  
		  horas = (24 - inicio) + fim;
			System.out.print("O JOGO DUROU " + horas + " HORA(S)\n");
			
		}else if(horas > 24){
		  
		  horas = (24 - fim) + (24 - inicio);
			System.out.print("O JOGO DUROU " + horas + " HORA(S)\n");
			
		}else{
		  
			System.out.print("O JOGO DUROU " + horas  + " HORA(S)\n");
		}		
	}
}

