const paymentgateway = document.querySelector(".confirm");
let selectedCheckout = document.querySelectorAll(".checkout");
let back = document.querySelector(".fa-arrow-left");
selectedCheckout = Array.from(selectedCheckout);

paymentgateway.addEventListener("click",()=>{
    window.location = "app.html";
});

back.addEventListener("click", () => {
    window.history.back();
  });

selectedCheckout.map((choice)=>{
    
    choice.addEventListener("click",()=>{
        choice.style.background = "#6fae07";
    });
})