import { CheckLocalStorage,SetLocalStorage} from './base.js'
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
let dbLikeAndSave=CheckLocalStorage("LikeAndSave");
let dbShare=CheckLocalStorage("Share");
let dbSignUp=CheckLocalStorage("signUp");
let dbsignIn=CheckLocalStorage("signIn");
let Card=document.getElementById("distiribution");
for (let i = 0; i < dbShare.length; i++) {
    // first div js
    let cardDiv=document.createElement("div");
    cardDiv.classList.add("card","my-4","rounded-4","border-2","border-black");
    cardDiv.style.width="22rem";
    cardDiv.style.maxHeight="450px";
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
    let likeIcon=document.createElement("i");
    likeIcon.classList.add("fa-solid","fa-heart","mx-1");
    for (let j = 0; j < dbLikeAndSave.length; j++) {
        if (dbLikeAndSave[j].Email==dbsignIn[dbsignIn.length-1].Email) {
            if (dbLikeAndSave[j].Id==dbShare[i].Id) {
                
                if (dbLikeAndSave[j].LikeClass=="text-dark") {
                    likeIcon.classList.add("text-dark");
                    likeIcon.classList.remove("text-danger");
                }
                else if (dbLikeAndSave[j].LikeClass=="text-danger") {
                    likeIcon.classList.remove("text-dark");
                    likeIcon.classList.add("text-danger");
                }
            }
        }
    }
    likeIcon.addEventListener("click",()=>{
        for (let j = 0; j < dbLikeAndSave.length; j++) {
            if (dbLikeAndSave[j].Email==dbsignIn[dbsignIn.length-1].Email) {
                if (dbLikeAndSave[j].Id==dbShare[i].Id) {
                    if (dbLikeAndSave[j].LikeClass=="text-dark") {
                        dbLikeAndSave[j].LikeClass="text-danger";
                        dbShare[i].LikeCount+=1;
                        SetLocalStorage(dbShare,"Share");
                        SetLocalStorage(dbLikeAndSave,"LikeAndSave");
                        window.location.reload();
                    }
                    else if (dbLikeAndSave[j].LikeClass=="text-danger") {
                        dbLikeAndSave[j].LikeClass="text-dark";
                        dbShare[i].LikeCount-=1;
                        SetLocalStorage(dbShare,"Share");
                        SetLocalStorage(dbLikeAndSave,"LikeAndSave");
                        window.location.reload();
                    }
                }
            }
        }
        
        
    })
    
    
    likeSpan.append(likeIcon);
    let likeCountSpan=document.createElement("span");
    likeCountSpan.innerText=dbShare[i].LikeCount;
    likeSpan.append(likeCountSpan);

    let saveSpan=document.createElement("span");
    let saveIcon=document.createElement("i");
    saveIcon.classList.add("fa-solid","fa-download","mx-1");
    for (let j = 0; j < dbLikeAndSave.length; j++) {
        if (dbLikeAndSave[j].Email==dbsignIn[dbsignIn.length-1].Email) {
            if (dbLikeAndSave[j].Id==dbShare[i].Id) {
                
                if (dbLikeAndSave[j].SaveClass=="text-dark") {
                    saveIcon.classList.add("text-dark");
                    saveIcon.classList.remove("text-danger");
                }
                else if (dbLikeAndSave[j].SaveClass=="text-danger") {
                    saveIcon.classList.remove("text-dark");
                    saveIcon.classList.add("text-danger");
                }
            }
        }
    }
    saveIcon.addEventListener("click",()=>{
        for (let j = 0; j < dbLikeAndSave.length; j++) {
            if (dbLikeAndSave[j].Email==dbsignIn[dbsignIn.length-1].Email&&dbShare[i].UserEmail!=dbsignIn[dbsignIn.length-1].Email) {
                if (dbLikeAndSave[j].Id==dbShare[i].Id) {
                    if (dbLikeAndSave[j].SaveClass=="text-dark") {
                        dbLikeAndSave[j].SaveClass="text-danger";
                        dbShare[i].SaveCount+=1;
                        SetLocalStorage(dbShare,"Share");
                        SetLocalStorage(dbLikeAndSave,"LikeAndSave");
                        window.location.reload();
                    }
                    else if (dbLikeAndSave[j].SaveClass=="text-danger") {
                        dbLikeAndSave[j].SaveClass="text-dark";
                        dbShare[i].SaveCount-=1;
                        SetLocalStorage(dbShare,"Share");
                        SetLocalStorage(dbLikeAndSave,"LikeAndSave");
                        window.location.reload();
                    }
                }
            }
        }
        
        
    })
    saveSpan.append(saveIcon);
    let saveCountSpan=document.createElement("span");
    saveCountSpan.innerText=dbShare[i].SaveCount;
    saveSpan.append(saveCountSpan);

    likeAndSaveDiv.append(likeSpan,saveSpan);

    let bodyDiv=document.createElement("div");
    bodyDiv.classList.add("card-body");

    let descriptionParagraf=document.createElement("p");
    descriptionParagraf.innerText=dbShare[i].Description;

    let tagParagraf=document.createElement("p");
    tagParagraf.classList.add("card-text");
    tagParagraf.innerText=dbShare[i].Tag;
    bodyDiv.append(descriptionParagraf,tagParagraf);

    cardDiv.append(InfoDiv,shareImage,likeAndSaveDiv,bodyDiv);
    Card.append(cardDiv);
}


let user=null;

for (let i = 0; i < dbSignUp.length; i++) {
    if (dbSignUp[i].Email==dbsignIn[dbsignIn.length-1].Email&&dbSignUp[i].Password==dbsignIn[dbsignIn.length-1].Password) {
        user=dbSignUp[i];
        
    }
}
let headInfoParagraf=document.querySelector("#headInfo p");
headInfoParagraf.innerText=user==null?"":user.about==undefined?"":user.about;
document.querySelector("#headInfo h1").innerText=user.Name+" "+user.SureName;
document.querySelector("footer p").innerText=user.about;
document.querySelector("footer").lastElementChild.firstElementChild.nextElementSibling.setAttribute("href",`tel:${user.Phone}`);
document.querySelector("footer").lastElementChild.firstElementChild.nextElementSibling.nextElementSibling.setAttribute("href",`tel:${user.Email}`);
document.querySelector("footer").lastElementChild.firstElementChild.nextElementSibling.innerText="+994"+user.Phone;
document.querySelector("footer").lastElementChild.firstElementChild.nextElementSibling.nextElementSibling.innerText=user.Email;
