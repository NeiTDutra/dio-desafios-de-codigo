/*


Desafio

A corrida de tartarugas é um esporte que cresceu muito nos últimos anos, fazendo com que vários competidores se dediquem a capturar tartarugas rápidas, e treina-las para faturar milhões em corridas pelo mundo. Porém a tarefa de capturar tartarugas não é uma tarefa muito fácil, pois quase todos esses répteis são bem lentos. Cada tartaruga é classificada em um nível dependendo de sua velocidade:


Nível 1: Se a velocidade é menor que 10 cm/h .
Nível 2: Se a velocidade é maior ou igual a 10 cm/h e menor que 20 cm/h .
Nível 3: Se a velocidade é maior ou igual a 20 cm/h .

Sua tarefa é identificar qual o nível de velocidade da tartaruga mais veloz de um grupo.

Entrada

A entrada consiste de múltiplos casos de teste, e cada um consiste em duas linhas: A primeira linha contém um inteiro L (1 ≤ L ≤ 500) representando o número de tartarugas do grupo, e a segunda linha contém L inteiros Vi (1 ≤ Vi ≤ 50) representando as velocidades de cada tartaruga do grupo.

Saída

Para cada caso de teste, imprima uma única linha indicando o nível de velocidade da tartaruga mais veloz do grupo.
*/

import java.io.*;

public class Desafio {
    public static void main(String args[]) throws IOException {
      
      BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
           //continue a solucao de acordo com o solicitado

  		int nTurtles = 0;
  		int vt;
  		int vT;
  		int mv;
  		int n = 0;
  		
  		do {
  		  String nT = br.readLine();
  		  
  		  if(nT != null && !nT.isEmpty()) {
  			  nTurtles = Integer.parseInt(nT);
  		  }
  		  else {
  		    return;
  		  }
  		  
  			String str = br.readLine();
  			String vTurtle[] = str.split(" ");
  			
  			mv = Integer.parseInt(vTurtle[0]);
  			
        for (vt = 0; vt < nTurtles; vt++)  {
          
          vT = Integer.parseInt(vTurtle[vt]);
          mv = (vT > mv) ? vT : mv;
        }
        
        if(mv < 10) {
          
          n = 1;
        }
        else if(mv >= 10 && mv < 20) {
          
          n = 2;
        }
        else if(mv >= 20) {
          
          n = 3;
        }
  			System.out.println(n);
  		} 
  		while (nTurtles > 0);
    }
}

