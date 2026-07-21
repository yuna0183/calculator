const display = document.getElementById("display");

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }catch{
        alert("잘못된 계산입니다.");
        display.value="";
    }
}