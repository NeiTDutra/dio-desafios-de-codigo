/*

Desafio

Crie um algoritmo que receba dois inputs que sejam strings e combine-as alternando as letras de cada string. 

Deve começar pela primeira letra da primeira string, seguido pela primeira letra da segunda string, em seguida pela segunda letra da primeira string e continuar dessa forma sucessivamente.

As letras restantes da cadeia mais longa devem ser adicionadas ao fim da string resultante e retornada.

Entrada

A entrada contém vários casos de teste. A primeira linha contém um inteiro N que indica a quantidade de casos de teste que vem a seguir. Cada caso de teste é composto por uma linha que contém duas cadeias de caracteres, cada cadeia de caracteres contém entre 1 e 50 caracteres inclusive.

Saída

Combine as duas cadeias de caracteres da entrada como mostrado no exemplo abaixo e exiba a cadeia resultante.

*/

import java.util.Scanner;

public class Desafio {

	public static void main(String[] args) {
  
    int nP = 0;
    String resultado = "";
	  
		Scanner leitor = new Scanner(System.in);
		
		int N = Integer.parseInt(leitor.nextLine());
		
		for ( int i = 0; i < N; i++ ) {
		  
		  String E = leitor.nextLine();
		  String Ee[] = E.split(" ");
			
			if ( Ee[0].length() > Ee[1].length() ) {
			  
			  nP = Ee[0].length(); 
			} 
			else {
				
				nP = Ee[1].length(); 
			}
			for ( int j = 0; j < nP ; j++ ) {
			  
			  if ( j < Ee[0].length() ) {
			    
			    resultado += Ee[0].charAt(j);
			  }
			  if ( j < Ee[1].length() ) {
			    
			    resultado += Ee[1].charAt(j);
			  }
			}
			System.out.println(resultado);
			resultado = "";
		}
	}

}

// Implementação retirada de https://github.com/lucasrmagalhaes/desafios-DIO/blob/master/Desafios/Java/2.%20Resolvendo%20Algoritmos%20com%20Java/3.%20Combina%C3%A7%C3%A3o%20de%20Strings/Main.java

/*
import java.util.Scanner;

public class Main {
    
    public static void main(String[] args) {
       
        Scanner scan = new Scanner(System.in);
        int casos = Integer.parseInt(scan.nextLine());         
        
        for(int i = 1; i <= casos; i++) {
            
            StringBuilder analise = new StringBuilder();
            String[] palavras = scan.nextLine().split(" ");
        
            int maxSize = Math.max (     
            palavras[0].length(),
            palavras[1].length());
            
            for(int dados = 0; dados < maxSize; dados++) {
                
                if(dados < palavras[0].length()) {
                    
                    analise.append(palavras[0].charAt(dados));
                
                }
                
                if(dados < palavras[1].length()) {
                   
                    analise.append(palavras[1].charAt(dados));
                
                }
            
            }
            
            System.out.println(analise.toString());
       
        }
    
    }

}
*/

