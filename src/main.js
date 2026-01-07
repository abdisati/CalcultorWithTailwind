const displayEl=document.getElementById("display");
const clearEl=document.getElementById("btnC");
const delEl=document.getElementById("btnB");
const divisorEl=document.getElementById("divisor");
const multiEl=document.getElementById("mult");
const sevenEl=document.getElementById("b7");
const eightEl=document.getElementById("b8");
const nineEl=document.getElementById("b9");
const minusEl=document.getElementById("bminus");
const fourEl=document.getElementById("4");
const fiveEl=document.getElementById("5");
const sixEl=document.getElementById("6");
const plusEl=document.getElementById("plus");
const oneEl=document.getElementById("btn1");
const twoEl=document.getElementById("btn2");
const threeEl=document.getElementById("btn3");
const equalEl=document.getElementById("equals");
const zeroEl=document.getElementById("btn0");
function conc(val){
  displayEl.value+=val;
}

conc("5");
conc('+');
conc('9');