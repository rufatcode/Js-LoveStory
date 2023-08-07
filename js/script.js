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