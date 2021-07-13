/*

Desafios

Crie um programa que leia um número e mostre os números pares até esse número, inclusive ele mesmo.

Entrada

Você receberá 1 valor inteiro N, onde N > 0.

Saída

Exiba todos os números pares até o valor de entrada, sendo um em cada linha. 

*/
import java.io.*;
import java.util.Scanner;

public class Solve {
	
    public static void main(String[] args) throws IOException {
  
      Scanner st = new Scanner(System.in);
      int n = Integer.parseInt(st.next());    
      
    	for (int i = 1; i <= n; i++) {
    	  
    		if (i % 2 == 0) System.out.println(i);
    	}
    }
	st.close();
}
