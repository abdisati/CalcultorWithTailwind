const displayEl=document.getElementById("display");


const numbersEl=document.querySelectorAll(".btn-numbers"); //this would return array of button elements
numbersEl.forEach((button)=>{
button.addEventListener('click',(e)=>{
  const buttonText=e.target.innerText; //get the inner text of the target element

  if(buttonText==="C"){
    clearV();
  }
  else if(buttonText==="⇽"){
    if(displayEl.value==="Cannot devide by zero") {clearV();
    return;}
    del();
  }
  else if(buttonText==="="){
    Calculate();
  }
  else{
    conc(buttonText);
  }

    //pass it to concat function
})
});


//add event listener to the buttons



function conc(val){
  displayEl.value+=val;
}

function clearV(){
  displayEl.value="";
}

function del(){
  let text=displayEl.value;
  text=text.substring(0,text.length-1);
  displayEl.value=text;
}

function Calculate(){
  let text=displayEl.value;
  //check if it includes division by zero
  if(text.includes("/0")){
    displayEl.value="Cannot devide by zero";
    return;
  }
  displayEl.value = eval(text);
}