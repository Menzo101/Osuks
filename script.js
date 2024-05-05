const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
 
hamburger.addEventListener("click",() =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

 var tablinks = document.getElementsByClassName("tab-links");
 var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
 for(tablink of tablinks){
    tablink.classList.remove("active-link")
 }
 for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab")
 }
 event.currentTarget.classList.add("active-link")
 document.getElementById(tabname).classList.add("active-tab")
}


