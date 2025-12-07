var settingsmenu=document.querySelector(".settings-menu");

function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}



let btn1 = document.getElementById("al1");
btn1.addEventListener(`click`,function(){
    alert("Do you want like?");
})
let btn2 = document.getElementById("al2");
btn2.addEventListener(`click`,function(){
    alert("Do you want comment?");
})
let btn3 = document.getElementById("al3");
btn3.addEventListener(`click`,function(){
    alert("Do you want share?");
})
let btn4 = document.getElementById("al4");
btn4.addEventListener(`click`,function(){
    alert("Do you want like?");
})
let btn5 = document.getElementById("al5");
btn5.addEventListener(`click`,function(){
    alert("Do you want comment?");
})
let btn6 = document.getElementById("al6");
btn6.addEventListener(`click`,function(){
    alert("Do you want share?");
})
let btn7 = document.getElementById("al7");
btn7.addEventListener(`click`,function(){
    alert("Do you want like?");
})
let btn8 = document.getElementById("al8");
btn8.addEventListener(`click`,function(){
    alert("Do you want comment?");
})
let btn9 = document.getElementById("al9");
btn9.addEventListener(`click`,function(){
    alert("Do you want share?");
})



let ld = document.getElementById("load-more-btn");
ld.addEventListener(`click`,function(){
    alert("Currently we are in Beta version!");
})




let dl = document.getElementById("dark-btns");
dl.addEventListener(`click`,()=>{
    document.body.classList.toggle("dark")
    let tx = document.getElementById("load-more-btn");
    if (document.body.className==="dark"){
        tx.style.color="white";
        dl.textContent="☀️ light Mode"
    }
    else {
        {dl.textContent="🌙 Dark Mode";}
        tx.style.color="black";
         
    }
      
})



