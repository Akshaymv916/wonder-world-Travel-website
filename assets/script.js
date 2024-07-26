const menubtn=document.getElementById('menu-btn');
const navlink=document.getElementById('nav_links');
const menubtnicon=menubtn.querySelector('i');

menubtn.addEventListener("click", (e) =>{
    navlink.classList.toggle("open");

    const isopen=navlink.classList.contains("open");
    menubtnicon.setAttribute("class",isopen? "ri-close-line" : "ri-menu-line")
});

navlink.addEventListener("click",(e) =>{
    nav_links.classList.remove("open")
    menubtnicon.setAttribute("class","ri-menu-line");

})



