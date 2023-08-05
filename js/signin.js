import { CheckLocalStorage,SetLocalStorage } from './base.js'
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:5,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2,

            }
        }
    })
  });
let dbSignUp=CheckLocalStorage("signUp");
let dbSignIn=CheckLocalStorage("signIn");
let email=document.getElementById("Email");
let password=document.getElementById("Password");
let btn=document.getElementById("btn");
let Check=document.getElementById("Check");
  Check.addEventListener("change",(event)=>{
    if(event.currentTarget.checked){
        password.type="text";
    }
    else{
        password.type="password";
    }
})
btn.addEventListener("click",()=>{
    let success=false;
    for (let i = 0; i < dbSignUp.length; i++) {
        if (dbSignUp[i].Email==email.value && dbSignUp[i].Password==password.value) {
            success=true;
            
        }
    }
    if (success) {
        const signIn={
            Email:email.value,
            Password:password.value
        }
        dbSignIn.push(signIn);
        SetLocalStorage(dbSignIn,"signIn");
        location.replace("../index.html")
    }
    else{
        swal({
            title:"Email Sifre yoxlama",
            text:"Email ve ya Password yanlisdir",
            type:"error"
        });
        email.value="";
        password.value="";
    }
})