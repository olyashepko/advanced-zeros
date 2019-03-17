module.exports = function getZerosCount(number, base) {
  function factorization (base) {
    let x=2;
    let arr = [];
    let baseSaved= base;
    while (baseSaved!==1) {
      if (baseSaved%x == 0) {
        arr.push(x);
        baseSaved/=x;
      } else {
        x++
      }
    }
  return arr;
  }
  let arr= factorization (base);
  let counter=1;
  let arrPow =[];
  let arrSlice =[];
  for (let i =0; i< arr.length;i++) {
    if (arr[i]!==arr[i+1] ) {
      arrSlice.push(arr[i]);
      arrPow.push(counter);
      counter=1;
    } else counter++;
  }
  let amountZeroes = 0;
  let numberSaved = number;
  let arrZeroes=[];
  for (let i=0; i<arrSlice.length;i++) {
    while (numberSaved>=1) {
      numberSaved/=arrSlice[i];
      amountZeroes+=numberSaved;
      amountZeroes = Math.floor(amountZeroes);
    }
    amountZeroes/=arrPow[i];
    amountZeroes = Math.floor(amountZeroes);
    arrZeroes.push(amountZeroes);
    amountZeroes = 0;
    numberSaved = number;
  }
  let min = Math.min.apply(Math, arrZeroes)
  return min;
}