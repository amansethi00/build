var side1 = document.querySelector("#side1");
var side2 = document.querySelector("#side2");
var side3 = document.querySelector("#side3");
var base = document.querySelector("#base");
var height = document.querySelector("#height");
var angleSide1 = document.querySelector("#side-with-angle-1");
var angleSide2 = document.querySelector("#side-with-angle-2");
var angle = document.querySelector("#angle");
var equilateraSide = document.querySelector("#equilateral-side");
var submitBtn1 = document.querySelector("#submit-btn-heron")
var submitBtn2 = document.querySelector("#submit-btn-2")
var submitBtn3 = document.querySelector("#submit-btn-3");
var submitBtn4 = document.querySelector("#submit-btn-4");
var output1 = document.querySelector("#output1");   
var output2 = document.querySelector("#output2");
var output3 = document.querySelector("#output3");
var output4 = document.querySelector("#output4");
var heron = document.querySelector("#heron");
var baseHeight = document.querySelector("#base-height");
var includedAngle = document.querySelector("#included-angle");
var equilateralTriangle = document.querySelector("#equilateral-triangle");
function clickHandlerHeron(){
    if(side1.value ==="" || side2.value ==="" || side3.value ===""){
        alert("Please enter all three sides of triangle to calculate area of the triangle");
    }
    else{
        var a=parseInt(side1.value);
        var b=parseInt(side2.value);
        var c=parseInt(side3.value);
        
        var d=((a+b+c)/2);
        console.log(d);
        var ans= (d*(d-a)*(d-b)*(d-c));
        console.log(ans);
        ans=Math.sqrt(ans);
        console.log(ans);
        
        output1.innerHTML=ans.toFixed(2);
    }
   
}
function clickHandlerBaseHeight(){
    var area = (0.5*(base.value)*(height.value));
    output2.innerText=area;
}
function clickHandlerSideAngleSide(){
    let a=angleSide1.value;
    let b= angleSide2.value;
    let c=angle.value;
    console.log(Math.sin(c* Math.PI / 180));
    let area = (0.5*a*b);
    output3.innerText = area;
}
function clickHandlerEquilateral(){
    let a=equilateraSide.value;
    let area = Math.sqrt(3)*a*a/4;
    output4.innerText = area;
}
submitBtn1.addEventListener("click",clickHandlerHeron);
submitBtn2.addEventListener("click",clickHandlerBaseHeight);
submitBtn3.addEventListener("click",clickHandlerSideAngleSide)
submitBtn4.addEventListener("click",clickHandlerEquilateral);

heron.addEventListener("click",function(){
    document.querySelector(".heron").style.display = "block";
    document.querySelector(".included-angle").style.display = "none";
    document.querySelector(".equilateral-triangle").style.display = "none";
    document.querySelector(".base-height").style.display = "none";

})

baseHeight.addEventListener("click",function(){
    document.querySelector(".base-height").style.display = "block";
    document.querySelector(".heron").style.display = "none";
    document.querySelector(".included-angle").style.display = "none";
    document.querySelector(".equilateral-triangle").style.display = "none";

})
includedAngle.addEventListener("click",function(){
    document.querySelector(".heron").style.display = "none";

    document.querySelector(".included-angle").style.display = "block";
    document.querySelector(".equilateral-triangle").style.display = "none";
    document.querySelector(".base-height").style.display = "none";
})
equilateralTriangle.addEventListener("click",function(){
    document.querySelector(".equilateral-triangle").style.display = "block";
    document.querySelector(".base-height").style.display = "none";
    document.querySelector(".heron").style.display = "none";

    document.querySelector(".included-angle").style.display = "none";
})