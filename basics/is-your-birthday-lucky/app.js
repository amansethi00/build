const submitBtn =  document.querySelector("#submit-btn");
const birthDate = document.querySelector("#date");
const luckyNumber = document.querySelector("#number");
const outputPara = document.querySelector("#outputpara");
const output = document.querySelector(".output");
const loader = document.querySelector(".loader");
var myVar;

function myFunction() {
    loader.style.display="block";
    output.style.display="none";
    myVar = setTimeout(clickHandler, 3000);

}

function clickHandler(){
    let birthDateValue =birthDate.value;
    loader.style.display="none";
    if(birthDateValue==="" || luckyNumber.value===""){
        alert("please enter lucky Number/birthdate")
    }
    else{
        output.style.display="block";
        
        let sum=0;
        
        for(var i=0;i<birthDateValue.length;i++){
            if(birthDateValue[i]==="-"){
    
            }
            else{
                sum+=birthDateValue[i];
            }
        }
        if(sum%luckyNumber.value === 0){
            outputPara.innerHTML="Congratulations your birthday is lucky!!!"
        }
        else{
            outputPara.innerHTML="Sorry,your birthday is not lucky"
        }

    }
   

}
submitBtn.addEventListener("click",myFunction);