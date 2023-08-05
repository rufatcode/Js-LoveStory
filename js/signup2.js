import { CheckLocalStorage,SetLocalStorage } from './base.js'

let selection=document.getElementById("selection");
let practiceInput=document.getElementById("practice");
let btn=document.getElementById("btn");

selection.addEventListener("change",(e)=>{
    if (e.target.value=="Isdifadeci") {
        practiceInput.disabled=true;
        practiceInput.value="0";
    }
    else{
        practiceInput.disabled=false;
    }
})

btn.addEventListener("click",()=>{
    let db=CheckLocalStorage("signUp");
    db[db.length-1].position=selection.value;
    db[db.length-1].practice=practiceInput.value;
    SetLocalStorage(db,"signUp");
    location.replace("../signin.html");
})