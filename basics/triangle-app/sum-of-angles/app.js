const angleA = document.querySelector("#angle-a");
const angleB = document.querySelector("#angle-b");
const angleC = document.querySelector("#angle-c");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output");
function clickHandler(){
    if(angleA.value ==="" || parseInt(angleB.value) ===""|| angleC.value===""){
        alert("Please input all three parseInt(angles of tr)iangle and try again")
    }
    else{
        output.style.display= "block";
        let a=parseInt(angleA.value);
        let b=parseInt(angleB.value);
        let c=parseInt(angleC.value);
        if(a+b+c === 180){
            output.innerHTML="Yes these are the angles of a triangle."
        }
        else{
            output.innerHTML="Nope these angles do not form a traingle."
        }
        
    }
}
submitBtn.addEventListener("click",clickHandler);
