let buttonEl = document.querySelectorAll("button");

let inputFildEl = document.getElementById("result");

for(let i = 0; i < buttonEl.length; i++){
    buttonEl[i].addEventListener("click", ()=>{
        
        let buttonVal = buttonEl[i].textContent;

        if(buttonVal === "C"){
            clearResult();
        }
        else if(buttonVal === "="){
            calculetResult();
        }
        else if(buttonVal === "Del"){
            cancleVal();
        }
        else{
            appendValue(buttonVal);
        }
    })
}

function clearResult(){
    inputFildEl.value="";
}
function cancleVal(){
    inputFildEl.value = inputFildEl.value.slice(0,-1);
}

function calculetResult(){
    inputFildEl.value = eval(inputFildEl.value)
}
function appendValue(buttonVal){
    inputFildEl.value += buttonVal
}