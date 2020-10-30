let sidebarToggler = document.querySelector(".fa-bars");
let sidebarCloser = document.querySelector(".fa-times");
let sidenav = document.querySelector(".sidenav");
let items = document.querySelectorAll(".item-name");
let  home = document.querySelector(".fa-home");
let cart = document.querySelector(".fa-shopping-cart");


cart.addEventListener("click",()=>{
    window.location = "cart.html";
});
home.addEventListener("click",()=>{
    window.location = "app.html";
});
items = Array.from(items);

sidebarToggler.addEventListener("click",()=>{
sidenav.style.display = "flex";
});


sidebarCloser.addEventListener("click",()=>{
    sidenav.style.display = "none";
});

items.map((item)=>{
    
    item.addEventListener("click",()=>{
        window.location = "fruits.html";
        });
});