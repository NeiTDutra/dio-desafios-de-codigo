/*

Desafio

Você deve fazer a leitura de 5 valores inteiros. Em seguida mostre quantos valores informados são pares, quantos valores informados são ímpares, quantos valores informados são positivos e quantos valores informados são negativos.

Entrada

Você receberá 5 valores inteiros.

Saída

Exiba a mensagem conforme o exemplo de saída abaixo, sendo uma mensagem por linha e não esquecendo o final de linha após cada uma.

*/

import java.io.IOException;
import java.util.Scanner;

public class minhaClasse {
	
    public static void main(String[] args) throws IOException {
      
        Scanner leitor = new Scanner(System.in);
//declare suas variaveis corretamente
        int[] num = new int [5];
        int par = 0;
        int impar = 0;
        int pos = 0;
        int neg = 0;
        
        for (int e = 0; e < 5; e++) {
          num[e] = Integer.parseInt(leitor.next());
        }

//continue a solução
        for (int i = 0; i < num.length; i++) {
        	
        	if (num[i] % 2 == 0) {
        	  par ++;
        	}
        	if (num[i] % 2 != 0) {
        	  impar ++;
        	}
        	if (num[i] > 0) {
        	  pos ++;
        	}
        	if (num[i] < 0) {
        	  neg ++;
        	}
        }
//insira suas variaveis corretamente
        System.out.println(par + " valor(es) par(es)");
        System.out.println(impar + " valor(es) impar(es)");
        System.out.println(pos + " valor(es) positivo(s)");
        System.out.println(neg + " valor(es) negativo(s)");
    }
	
}
