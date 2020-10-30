let back = document.querySelector(".fa-arrow-left");
let addToCart = document.querySelector(".fa-cart-plus");
let  home = document.querySelector(".fa-home");
let cart = document.querySelector(".fa-shopping-cart");


cart.addEventListener("click",()=>{
    window.location = "cart.html";
});
home.addEventListener("click",()=>{
    window.location = "app.html";
});

back.addEventListener("click", () => {
  window.location = "fruits.html";
});

addToCart.addEventListener("click", () => {
    window.location = "cart.html";
});
  