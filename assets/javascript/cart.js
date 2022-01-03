let add = document.getElementById("plus");
let sub = document.getElementById("minus");
let numbr = document.getElementById("number");

let price = document.getElementById("price");
let priceA = JSON.parse(price.dataset.value);
let total = document.getElementById("total");
let intgr = JSON.parse(number.dataset.value);

function addition() {
  intgr += 1;
  numbr.innerHTML = intgr;
  console.log(intgr);
  let tot = intgr*priceA;
  console.log(tot);
  total.innerHTML = tot;

}
function subract() {
  if(intgr==1){
    return intgr;
  }else{
    intgr -= 1;
    numbr.innerHTML = intgr;
    let tot = intgr*priceA;
    console.log(tot);
    total.innerHTML = tot;
  }
}
