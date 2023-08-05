import { CheckLocalStorage,SetLocalStorage } from'./base.js'
let nameInput=document.getElementById("name");
let sureNameInput=document.getElementById("surename");
let phone=document.getElementById("phone");
let email=document.getElementById("Email");
let Password1=document.getElementById("Password1");
let Password2=document.getElementById("Password2");
let Check=document.getElementById("Check");
let btn=document.getElementById("btn");
function CheckEmail(email){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(mailformat)!=null){
        return email;
    }
    return null;
}

function CheckPassword(password){
    if(password.length<6||password.length>16){
        return null;
    }
    return password;
}

function CheckPhone(phone){
    let phoneFormat=/^(50|51|55|70|77|99)+\d{7}$/;
    if (phone.match(phoneFormat)==null) {
        return null;
    }
    return phone;
}


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
    else if (CheckEmail(email.value)==null) {
        swal({
            title:"Email Yoxmala",
            text:"Email Uygun Deyil",
            type:"error"
        })
        
        email.value="";
        return;
    }
    else if(CheckPhone(phone.value)==null){
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
    for (let i = 0; i < db.length; i++) {
        if (db[i].Email==email.value||db[i].Phone==phone.value) {
            swal({
                title:"Isdifadeci yoxlama",
                text:"Bu isdifadeci  artiq qeydiyatdan kecib",
                type:"error"
            });
            return;
        }
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

