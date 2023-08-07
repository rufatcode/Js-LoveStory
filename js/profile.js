import { CheckLocalStorage,SetLocalStorage,CheckPassword,CheckEmail,CheckPhone  } from './base.js'
let dbSignUp=CheckLocalStorage("signUp");
let dbsignIn=CheckLocalStorage("signIn");
let bar1=document.getElementById("bar1");
let bar2=document.getElementById("bar2");
let firstUl=document.getElementById("firstUl");
let secondUl=document.getElementById("secondUl");

bar1.addEventListener("click",()=>{
    if(window.screen.availWidth<990){
        if(firstUl.getAttribute("class").match("display-visible")==null){
        firstUl.classList.add("display-visible");
        }
        else{
            firstUl.classList.remove("display-visible");
        }
    }
    
    
})
bar2.addEventListener("click",()=>{
    if(window.screen.availWidth<990){
        if(secondUl.getAttribute("class").match("display-visible")==null){
            secondUl.classList.add("display-visible");
        }
        else{
            secondUl.classList.remove("display-visible");
        }
    }
})
let userName=document.getElementById("user-name");
let position=document.getElementById("position");
let practice=document.getElementById("practice");
let about=document.getElementById("about");
let btn=document.getElementById("btn");
let email=document.getElementById("email");
let phone=document.getElementById("phone");
let link=document.getElementById("link");
let profileInfoDiv=document.getElementById("profileInfo");
let editDiv=document.getElementById("edit");

for (let i = 0; i < dbSignUp.length; i++) {
    if (dbSignUp[i].Email==dbsignIn[dbsignIn.length-1].Email&&dbSignUp[i].Password==dbsignIn[dbsignIn.length-1].Password) {
        userName.innerText=dbSignUp[i].Name+" "+dbSignUp[i].SureName;
        position.innerText=dbSignUp[i].position;
        practice.innerText=dbSignUp[i].practice;
        email.innerText=dbSignUp[i].Email;
        phone.innerText="(+994)"+dbSignUp[i].Phone;
        if(dbSignUp[i].link==undefined){
            link.setAttribute("href","#");
        }
        else{
            link.innerText=dbSignUp[i].link;
            link.setAttribute("href",dbSignUp[i].link);
        }
        if(dbSignUp[i].about==undefined){
            about.innerText="";
        }
        else{
            about.innerText=dbSignUp[i].about;
        }
    }
}
btn.addEventListener("click",()=>{
    profileInfoDiv.classList.add("d-none");
    editDiv.classList.remove("d-none");

})


let nameInput=document.getElementById("nameInput");
let surenameInput=document.getElementById("surenameInput");
let EmailInput=document.getElementById("EmailInput");
let selectionInput=document.getElementById("selectionInput");
let practiceInput=document.getElementById("practiceInput");
let phoneInput=document.getElementById("phoneInput");
let linkInput=document.getElementById("linkInput");
let aboutInput=document.getElementById("aboutInput");
let editBtn=document.getElementById("editBtn");
let profilePicture=document.getElementById("profilePicture");
let demoImg=document.getElementById("demoImg");
let arr=[nameInput,surenameInput,EmailInput,selectionInput,practiceInput,phoneInput,linkInput,aboutInput];
if(window.screen.availWidth<500){
    editDiv.classList.remove("d-flex","justify-content-center");
    for (let i = 0; i < arr.length; i++) {
        arr[i].classList.add("changeWidth");
        editBtn.style.marginRight="20px"
    }
}

demoImg.addEventListener("click",()=>{
    demoImg.previousElementSibling.click();
    demoImg.previousElementSibling.addEventListener("change",function(e){
        let filereader=new FileReader();
        filereader.onload=function(e){
            for (let i = 0; i < dbSignUp.length; i++) {
                if (dbSignUp[i].Email==dbsignIn[dbsignIn.length-1].Email&&dbSignUp[i].Password==dbsignIn[dbsignIn.length-1].Password) {
                    demoImg.setAttribute("src",e.target.result);
                    dbSignUp[i].image=e.target.result;
                }
            }
            
        }
        SetLocalStorage(dbSignUp,"signUp");
        filereader.readAsDataURL(e.target.files[0])
    })
    
})

editBtn.addEventListener("click",()=>{
    for (let i = 0; i < dbSignUp.length; i++) {
        if (dbSignUp[i].Email==dbsignIn[dbsignIn.length-1].Email&&dbSignUp[i].Password==dbsignIn[dbsignIn.length-1].Password) {
            if (nameInput.value!="") {
                dbSignUp[i].Name=nameInput.value;
            }
            if (surenameInput.value!="") {
                dbSignUp[i].SureName=surenameInput.value;
            }
            if (CheckEmail(EmailInput.value,"signUp")!=null) {
                dbSignUp[i].Email=EmailInput.value;
            }
            selectionInput.onchange = (event) => {
                dbSignUp[i].position = event.target.value;
            }
            practiceInput.onchange = (event) => {
                dbSignUp[i].practice = event.target.value;
            }
            if(CheckPhone(phoneInput.value,"signUp")!=null){
                dbSignUp[i].Phone=phoneInput.value;
            }
            if (linkInput.value!="") {
                dbSignUp[i].link=linkInput.value;
            }
            if (aboutInput.value!="") {
                dbSignUp[i].about=aboutInput.value;
            }
            
        }
    }
    SetLocalStorage(dbSignUp,"signUp");
    profileInfoDiv.classList.remove("d-none");
    editDiv.classList.add("d-none");
    window.location.replace("../signin.html");
})