import { CheckLocalStorage,SetLocalStorage,CheckPassword,CheckEmail,CheckPhone } from'./base.js'
let nameInput=document.getElementById("name");
let sureNameInput=document.getElementById("surename");
let phone=document.getElementById("phone");
let email=document.getElementById("Email");
let Password1=document.getElementById("Password1");
let Password2=document.getElementById("Password2");
let Check=document.getElementById("Check");
let btn=document.getElementById("btn");







btn.addEventListener("click",()=>{
    let db=CheckLocalStorage("signUp");
    nameInput.value.trim;
    sureNameInput.value.trim;
    if (nameInput.value.length==0||sureNameInput.value.length==0) {
        swal({
            title:"Ad Soyad Yoxmala",
            text:"Ad ve ya Soyad Uygun Deyil",
            type:"error"
        });
        nameInput.value="";
        sureNameInput.value="";
        return;
    }
    else if (CheckEmail(email.value,"signUp")==null) {
        swal({
            title:"Email Yoxmala",
            text:"Email Uygun Deyil",
            type:"error"
        })
        
        email.value="";
        return;
    }
    else if(CheckPhone(phone.value,"signUp")==null){
        swal({
            title:"Nomre Yoxmala",
            text:"Nomre Uygun Deyil",
            type:"error"
        })
        phone.value="";
        return;
    }
    else if(CheckPassword(Password1.value)==null||Password1.value!=Password2.value){
        swal({
            title:"Sifre Yoxmala",
            text:"Sifre Uygun Deyil",
            type:"error"
        })
        Password1.value="";
        Password2.value="";
        return;
    }
    

    
    const signUp={
        Name:nameInput.value,
        SureName:sureNameInput.value,
        Email:email.value,
        Phone: phone.value,
        Password:Password1.value
    };

    
    db.push(signUp);
    SetLocalStorage(db,"signUp");
    location.replace("../signup2.html")
})
    
Check.addEventListener("change",(event)=>{
    if(event.currentTarget.checked){
        Password1.type="text";
        Password2.type="text";
    }
    else{
        Password1.type="password";
        Password2.type="password";
    }
})

