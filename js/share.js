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
let ShareDiv=document.getElementById("Share");

if(window.screen.availWidth<600){
    ShareDiv.classList.remove("d-flex","justify-content-center");
}
let imgArea=document.getElementById("demoImg");
let shareBtn=document.getElementById("shareBtn");
let uploadBtn=imgArea.lastElementChild;
let priceInput=document.getElementById("priceInput");
let locationInput=document.getElementById("locationInput");
let tagInput=document.getElementById("tagInput");
let describtionInput=document.getElementById("describtionInput");
let dbSignUp=CheckLocalStorage("signUp");
let dbsignIn=CheckLocalStorage("signIn");
let dbShare=CheckLocalStorage("Share");
let dbLikeAndSave=CheckLocalStorage("LikeAndSave");
let user=null;
const Share={};
for (let i = 0; i < dbSignUp.length; i++) {
    if (dbSignUp[i].Email==dbsignIn[dbsignIn.length-1].Email&&dbSignUp[i].Password==dbsignIn[dbsignIn.length-1].Password) {
        user=dbSignUp[i];
        
    }
}
shareBtn.addEventListener("click",function(){
    if (priceInput.value.trim()=="") {
        swal({
            title:"Qiymet Yoxmala",
            text:"Qiymet Duzgun Deyil",
            type:"error"
        })
        priceInput.value="";
        return;
    }
    else if (locationInput.value.trim()=="") {
        swal({
            title:"Konum Yoxmala",
            text:"Olduqunuz yeri daxil edin",
            type:"error"
        })
        locationInput.value="";
        return;
    }
    else if (describtionInput.value.trim()==""||describtionInput.value.length<50) {
        swal({
            title:"Sekil Tesviri Yoxmalasi",
            text:"Sekli en azi 50 soz ile tesvir edin",
            type:"error"
        })
        describtionInput.value="";
        return;
    }
    Share.Name=user.Name+" "+user.SureName,
    Share.UserEmail=user.Email,
    Share.ProfileImage=user.image!=null?user.image:"../img/default.jpeg",
    Share.imagePrice="Qiymet "+priceInput.value,
    Share.Location=locationInput.value,
    Share.Tag=tagInput.value,
    Share.Description=describtionInput.value,
    Share.LikeCount=0,
    Share.SaveCount=0,
    Share.Id=dbShare.length;
    for (let i = 0; i < dbSignUp.length; i++) {
        const LikeAndSave={
            Id:Share.Id,
            Email:dbSignUp[i].Email,
            LikeClass:"text-dark",
            SaveClass:"text-dark",
        };
       
        dbLikeAndSave.push(LikeAndSave);
        

    }
    dbShare.push(Share);
    SetLocalStorage(dbLikeAndSave,"LikeAndSave");
    SetLocalStorage(dbShare,"Share");
    location.replace("../index.html")
})
imgArea.addEventListener("dragover",function(e){
    e.preventDefault();
})
imgArea.addEventListener("drop",function(e){
    e.preventDefault();
    let filereader=new FileReader();
    filereader.onload=function(e){
        Share.ShareImage=e.target.result;
    }
    filereader.readAsDataURL(e.dataTransfer.files[0]);
})
uploadBtn.addEventListener("click",function(e){
    uploadBtn.parentElement.previousElementSibling.click();
    uploadBtn.parentElement.previousElementSibling.addEventListener("change",function(e){
        let filereader=new FileReader();
        filereader.onload=function(e){
            Share.ShareImage=e.target.result;
        }
        filereader.readAsDataURL(e.target.files[0])
    })
})