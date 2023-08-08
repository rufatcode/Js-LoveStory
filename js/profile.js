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
let profilePicture=document.getElementById("profilePicture");
let profileSection=document.getElementById("profileSection");
let demoImg=document.getElementById("demoImg");
if(window.screen.availWidth<600){
    editDiv.classList.remove("d-flex","justify-content-center");
}
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
        if (dbSignUp[i].image!=undefined) {
            profilePicture.setAttribute("src",dbSignUp[i].image)
            demoImg.setAttribute("src",dbSignUp[i].image)
        }
    }
}
btn.addEventListener("click",()=>{
    profileInfoDiv.classList.add("d-none");
    profileSection.classList.add("d-none")
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
let arr=[nameInput,surenameInput,EmailInput,selectionInput,practiceInput,phoneInput,linkInput,aboutInput];
if(window.screen.availWidth<500){
    editDiv.classList.remove("d-flex","justify-content-center");
    for (let i = 0; i < arr.length; i++) {
        arr[i].classList.add("changeWidth");
        editBtn.style.marginRight="20px"
    }
}
let dbShare=CheckLocalStorage("Share");
demoImg.addEventListener("click",()=>{
    demoImg.previousElementSibling.click();
    demoImg.previousElementSibling.addEventListener("change",function(e){
        let filereader=new FileReader();
        filereader.onload=function(e){
            for (let i = 0; i < dbSignUp.length; i++) {
                if (dbSignUp[i].Email==dbsignIn[dbsignIn.length-1].Email&&dbSignUp[i].Password==dbsignIn[dbsignIn.length-1].Password) {
                    demoImg.setAttribute("src",e.target.result);
                    dbSignUp[i].image=e.target.result;
                    for (let j = 0; j < dbShare.length; j++) {
                        if (dbShare[j].UserEmail==dbSignUp[i].Email) {
                            dbShare[j].ProfileImage=e.target.result;
                            console.log(dbShare[j]);
                            
                        }
                    }
                }
                
            }
           
            SetLocalStorage(dbSignUp,"signUp");
            SetLocalStorage(dbShare,"Share");
        }
        
        filereader.readAsDataURL(e.target.files[0])
    })
    
})
demoImg.ondragover=function(e){
    e.preventDefault();
}
demoImg.ondrop=function(e){
    e.preventDefault();
    let filereader=new FileReader();
        filereader.onload=function(e){
            for (let i = 0; i < dbSignUp.length; i++) {
                if (dbSignUp[i].Email==dbsignIn[dbsignIn.length-1].Email&&dbSignUp[i].Password==dbsignIn[dbsignIn.length-1].Password) {
                    demoImg.setAttribute("src",e.target.result);
                    dbSignUp[i].image=e.target.result;
                    for (let j = 0; j < dbShare.length; j++) {
                        if (dbShare[j].UserEmail==dbSignUp[i].Email) {
                            dbShare[j].ProfileImage=e.target.result;
                            
                        }
                    }
                }
                
            }
            SetLocalStorage(dbSignUp,"signUp");
            SetLocalStorage(dbShare,"Share");
        }
        
        filereader.readAsDataURL(e.dataTransfer.files[0])
}

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
            if (aboutInput.value.trim()!="") {
                dbSignUp[i].about=aboutInput.value;
            }
            
        }
    }
    SetLocalStorage(dbSignUp,"signUp");
    profileInfoDiv.classList.remove("d-none");
    editDiv.classList.add("d-none");
    window.location.replace("../signin.html");
})

let likeContent=document.getElementById("likeContent");
let saveContent=document.getElementById("saveContent");
let imageSave=document.getElementById("imageSave");
let imageBtn=document.getElementById("imageBtn");

imageSave.addEventListener("click",()=>{
    saveContent.classList.remove("d-none");
    likeContent.classList.add("d-none");
})
imageBtn.addEventListener("click",()=>{
    saveContent.classList.add("d-none");
    likeContent.classList.remove("d-none");
})

for (let i = 0; i < dbShare.length; i++) {
    if (dbShare[i].UserEmail==dbsignIn[dbsignIn.length-1].Email) {
        let cardDiv=document.createElement("div");
        cardDiv.classList.add("card","my-4","rounded-4","border-2","border-black");
        cardDiv.style.width="22rem";
        cardDiv.style.maxHeight="550px";
        cardDiv.style.overflowY= "scroll";
        let InfoDiv=document.createElement("div");
        let profileImage=document.createElement("img");
        profileImage.classList.add("rounded-circle");
        profileImage.style.width="50px";
        profileImage.style.height="50px";
        profileImage.setAttribute("src",dbShare[i].ProfileImage!=undefined?dbShare[i].ProfileImage:"../img/default.jpeg");
        let headInfo=document.createElement("h1");
        headInfo.classList.add("d-inline-block","fs-6","mt-3","px-3")
        let nameParagraf=document.createElement("p");
        nameParagraf.classList.add("mb-1");
        nameParagraf.innerText=dbShare[i].Name;
        let locationParagraph=document.createElement("p");
        locationParagraph.innerText=dbShare[i].Location;
        headInfo.append(nameParagraf,locationParagraph);
        let priceHeadling=document.createElement("h3");
        priceHeadling.classList.add("fs-6","d-inline-block");
        priceHeadling.innerText=dbShare[i].imagePrice;
        InfoDiv.append(profileImage,headInfo,priceHeadling);

        //second Image

        let shareImage=document.createElement("img");
        shareImage.classList.add("card-img-top","rounded-4","mb-3","border","border-1","border-black");
        shareImage.setAttribute("src",dbShare[i].ShareImage);
        shareImage.style.width="100%";
        shareImage.style.height="200px";
        let likeAndSaveDiv=document.createElement("div");
        likeAndSaveDiv.classList.add("d-flex","justify-content-between","px-4");

        let likeSpan=document.createElement("span");
        likeSpan.innerHTML='<i class="fa-regular fa-heart mx-1">';
        let likeCountSpan=document.createElement("span");
        likeCountSpan.innerText=dbShare[i].LikeCount;
        likeSpan.append(likeCountSpan);

        let saveSpan=document.createElement("span");
        saveSpan.innerHTML='<i class="fa-solid fa-download mx-1">';
        let saveCountSpan=document.createElement("span");
        saveCountSpan.innerText=dbShare[i].SaveCount;
        saveSpan.append(saveCountSpan);
        let removeSpan=document.createElement("span");
        let removeIcon=document.createElement("i");
        
        removeIcon.classList.add("fa-solid","fa-trash");
        removeSpan.append(removeIcon);
        removeIcon.addEventListener("click",()=>{
            dbShare=dbShare.filter(item=>item!=dbShare[i])
            SetLocalStorage(dbShare,"Share");
            cardDiv.remove();
            return;

        })
        likeAndSaveDiv.append(likeSpan,saveSpan,removeSpan);

        let bodyDiv=document.createElement("div");
        bodyDiv.classList.add("card-body");

        let descriptionParagraf=document.createElement("p");
        descriptionParagraf.innerText=dbShare[i].Description;

        let tagParagraf=document.createElement("p");
        tagParagraf.classList.add("card-text");
        tagParagraf.innerText=dbShare[i].Tag;
        bodyDiv.append(descriptionParagraf,tagParagraf);

        cardDiv.append(InfoDiv,shareImage,likeAndSaveDiv,bodyDiv);
        likeContent.append(cardDiv);
    }
}