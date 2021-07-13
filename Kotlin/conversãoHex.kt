/*
Neste problema você é solicitado a escrever um simples programa de conversão de base. A entrada será um valor hexadecimal ou decimal. Você deverá converter cada valor da entrada. Se o valor for hexadecimal, você deve convertê-lo para decimal e vice-versa. O valor hexadecimal inicia sempre com “0x” ou também, é aquele valor cuja segunda casa contém a letra 'x'.

Entrada

A entrada contém vários casos de teste. Cada linha de entrada, com exceção da última, contém um número não-negativo, decimal ou hexa. O valor decimal será menor ou igual a 231. A última linha contém um número negativo que não deve ser processado, indicando o encerramento do programa.

Saída

Para cada linha de entrada (exceto a última) deve ser produzido uma linha de saída. Todo número hexadecimal deve ser precedido na saída por '0x' (zero xis).

PESQUISADO EM: 
https://github.com/marceloalves95/desafio-bootcamping-everis-Kotlin-Develops-dio/blob/master/src/desafios/Desafio10.kt

*/
fun main(args: Array<String>) {
	
	var s : String
	var n : Int
	val r = """0x.*""".toRegex()
	val list = mutableListOf<String>()
	var state = true
	
	while(state) {

    val inTo = readLine()!!.toString()
    
    if (!inTo.contains(r) && inTo.toInt() > 0 && inTo.toInt() < Integer.MAX_VALUE) {
      
      n = inTo.toInt()
      s = Integer.toHexString(n).toUpperCase()
      s = "0x$s"
      list.add(s)
    }
    if (inTo.contains(r)) {
      
      s = inTo.removeRange(0,2)
      n = s.toInt(16)
      list.add(n.toString())
    }
    if (inTo == "-1") {
      state = false
    }
	}
	
	for (i in list) {
	  println(i)
	}
}
