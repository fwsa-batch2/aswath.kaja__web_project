let add = document.getElementById("plus");
let sub = document.getElementById("minus");
let numbr = document.getElementById("number");

let price = document.getElementById("price");
console.log(price)
let priceA = JSON.parse(price.dataset.value);
let total = document.getElementById("total");
console.log(total)
let intgr = JSON.parse(number.dataset.value);
console.log(intgr);

function addition(value1,value2,value3) {
  value1 += 1;
  value2.innerHTML = value1;
  let tot = value1*value2;
  value3.innerHTML = tot;
}
function subract(value1,value2,value3) {
  if(value1==1){
    return value1;
  }else{
    value1 -= 1;
    value2.innerHTML = value1;
    let tot = value1*value2;
    value3.innerHTML = tot;
  }
}
addition(numbr,priceA,intgr);
