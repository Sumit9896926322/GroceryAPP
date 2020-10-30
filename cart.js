const paymentgateway = document.querySelector(".confirm");
let back = document.querySelector(".fa-arrow-left");

paymentgateway.addEventListener("click",()=>{
    window.location = "payment.html";
});

back.addEventListener("click", () => {
    window.history.back();
  });