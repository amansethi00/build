const billAmt = document.querySelector("#bill-amt");
const cashGiven = document.querySelector("#cash-given");
const output = document.querySelector("#output");
const btn = document.querySelector("#btn");
const btn1 = document.querySelector("#btn1");
const cash = document.querySelector("#cash")
btn1.addEventListener("click",showCash);
function showCash(){
    var billAmtValue = billAmt.value;
    if(billAmtValue===""){
        alert("Please enter correct bill Amount");
    }
    else{
        cash.style.display = "block";
        btn1.style.display = "none";
    }
}
btn.addEventListener("click",myFunction);

let changes ={
    "2000":0,
    "500":0,
    "100":0,
    "20":0,
    "10":0,
    "5":0,
    "1":0,
};
const arr = Object.keys(changes).reverse();


function myFunction(){
    output.innerHTML="";
    var billAmtValue = billAmt.value;
    if(billAmtValue===""){
        alert("Please enter correct bill Amount");
    }
    else{

     let cashGivenValue = cashGiven.value;    
    if(cashGivenValue ===""){
        alert("Please enter correct cash Given value")
    }   
    let changeValue = cashGivenValue - billAmtValue;

    if(changeValue < 0){
        alert("Please enter Cash received greater than or equal to bill Value");
    }
    else{
        table = document.createElement("TABLE");
        table.style.border="1px solid black";
        table.style.borderRadius = "1rem";
        table.style.padding = "1rem";
        var h1 = table.insertRow(0);
        var hc1 = h1.insertCell(0);
        hc1.innerHTML = "Amount";
        var hc2 = h1.insertCell(1);
        hc2.innerHTML = "Quantity";
        table.style.backgroundColor ="#DBD5B5";
        // table.style.boxShadow = "10px 10px 15px 10px #ffc837"
        for(let i=0;i<arr.length;i++){
            var r=table.insertRow(i+1);
            var c1= r.insertCell(0);
            c1.innerHTML = arr[i];
            var c2=r.insertCell(1);
            if(arr[i]<=changeValue){
                let x= Math.floor(changeValue/arr[i]);
                changeValue-=(arr[i]*x);
                changes[arr[i]]=x;
                
                c2.innerHTML = x;

            }
            else{
                c2.innerHTML = "0";
            }
            
        }
        // console.log(changes);
        output.appendChild(table);
    
}


    }
    
    
}