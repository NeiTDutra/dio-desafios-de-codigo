let valor1 = parseInt(1046);

console.log(valor1);
  
  let notade = [100, 50, 20, 10, 5, 2, 1];
  
let saque = notade.filter(el) => {
  
  for(let i = 0; i < notade.length; i ++) {
    valor1 = valor1 == null ? valor1 == 1 : valor1;
    let q = parseInt(valor1 / notade[i]);
    valor1 = parseInt(valor1 % notade[i]);
    let sq = q + ' nota(s) de R$ ' + notade[i] + ',00';
    return sq;
    console.log(typeof valor1);
  }
}

console.log(troco());
