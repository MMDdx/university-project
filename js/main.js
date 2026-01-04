
function filterTours() {

    
    const search = document.getElementById('search-input').value;
    const cards = document.querySelectorAll('.tour-card');
    const checkedFilters = Array.from(document.querySelectorAll('input[type="radio"]:checked')).map(cb => cb.value);
    console.log(checkedFilters);
    
    cards.forEach(card => {
        const h3 = card.querySelector('h3')
        
        const name = h3.textContent;
        const price = parseInt(card.querySelector("a").dataset.price);
        
        const location = card.querySelector("a").dataset.location;
        console.log(location);
        const duration = parseInt(card.dataset.duration);

        let show = name.includes(search);

        if (checkedFilters.includes('under4') && price >= 4000000) show = false;
        if (checkedFilters.includes('4to6') && (price < 4000000 || price > 6000000) ) show = false;
        if (checkedFilters.includes(location)) {
            
        } 

        card.style.display = show ? 'block' : 'none';
    });
}

function sortTours() {
    const value = document.getElementById('sort-dropdown').value;
    const grid = document.getElementById('tours-grid');
    const cards = Array.from(grid.children);
    console.log(cards);
    

    cards.sort((a, b) => {
        if (value === 'price-low') return parseInt(a.querySelector("a").dataset.price) - parseInt(b.querySelector("a").dataset.price);
        if (value === 'price-high') return parseInt(b.querySelector("a").dataset.price) - parseInt(a.querySelector("a").dataset.price);
        return 0;
    });

    cards.forEach(card => grid.appendChild(card));
}

function filterByCategory(category) {
    const cards = document.querySelectorAll('.tour-card');
    cards.forEach(card => {
        card.style.display = (category === '' || card.querySelector("a").dataset.category === category) ? 'block' : 'none';
    });
}


function addToCart() {
            const badge = document.getElementById('cart-count');
            let cartCount = +badge.textContent;
            cartCount++;
            badge.textContent = cartCount;
           
}


let buttons = document.querySelectorAll(".cart-section button")

for (const btn of buttons) {
    btn.onclick = addToCart
}