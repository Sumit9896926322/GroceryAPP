let fruits= document.querySelectorAll(".fruit");
fruits = Array.from(fruits);
let back = document.querySelector(".fa-arrow-left");
let  home = document.querySelector(".fa-home");
let cart = document.querySelector(".fa-shopping-cart");


cart.addEventListener("click",()=>{
    window.location = "cart.html";
});
home.addEventListener("click",()=>{
    window.location = "app.html";
});


back.addEventListener("click", () => {
  window.location = "app.html";
});



fruits.map(fruit=>{
    fruit.addEventListener("click",()=>{
        window.location = "aboutFruit.html";
    })
})