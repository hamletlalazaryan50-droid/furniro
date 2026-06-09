const cartIcon = document.querySelector("#cart-icon");
const closeCart = document.querySelector("#close-cart");
const shoppingCart = document.querySelector(".shopping-cart");
const cartOverlay = document.querySelector(".cart-overlay");
const body = document.querySelector("body");

cartIcon.addEventListener("click", () => {
  shoppingCart.classList.add("active");
  cartOverlay.classList.add("active");
  body.style.overflow = "hidden";
});

closeCart.addEventListener("click", () => {
  shoppingCart.classList.remove("active");
  cartOverlay.classList.remove("active");
  body.style.overflow = "auto";
});

cartOverlay.addEventListener("click", () => {
  shoppingCart.classList.remove("active");
  cartOverlay.classList.remove("active");
  body.style.overflow = "auto";
});
