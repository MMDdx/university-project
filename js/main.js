let buttons = document.querySelectorAll(".cart-section button")
const badge = document.getElementById('cart-count');
const favoriteIcon = document.querySelectorAll('.md-icon-button-favorite')

function addToCart() {
    let cartCount = +badge.textContent;
    cartCount++;
    badge.textContent = cartCount;
           
}

if (buttons){
    for (const btn of buttons) {
        btn.onclick = addToCart
    }
}

if (favoriteIcon){
    favoriteIcon.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('favorited');
        });
    });
}

