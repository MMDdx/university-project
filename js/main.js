
const badge = document.getElementById('cart-count');
let cartCount = +badge.textContent;

function addToCart() {
            cartCount++;
            badge.textContent = cartCount;
           
}


let buttons = document.querySelectorAll(".cart-section button")

for (const btn of buttons) {
    btn.onclick = addToCart
}