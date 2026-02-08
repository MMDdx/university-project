import {validateSignUpForm , validateContactForm, validateSignInForm} from "./validation.js";

document.addEventListener('DOMContentLoaded', () => {
    const signUpForm = document.querySelector('#signup-form');
    const loginForm = document.querySelector('#signin-form');
    const contactForm = document.querySelector("#contact-form")

    if (signUpForm) {
        signUpForm.addEventListener('submit', validateSignUpForm);
    } else if (loginForm){
        loginForm.addEventListener('submit', validateSignInForm);
    }
    else if (contactForm){

        contactForm.addEventListener('submit', validateContactForm);
    }
});




function filterTours() {
    const search = document.getElementById('search-input').value.toLowerCase().trim();
    const cards = document.querySelectorAll('.tour-card');

    // جمع‌آوری همه فیلترهای انتخاب شده (radio)
    const checkedFilters = Array.from(document.querySelectorAll('input[type="radio"]:checked'))
        .map(cb => cb.value)
        .filter(val => val !== "");   // خالی‌ها را حذف کنیم

    console.log("فیلترهای فعال:", checkedFilters);

    cards.forEach(card => {
        const link = card.querySelector('a');
        if (!link) return;

        const name = card.querySelector('h3').textContent.toLowerCase();
        const price = parseInt(link.dataset.price) || 0;
        const location = (link.dataset.location || "").toLowerCase();   // مهم: به حروف کوچک تبدیل شود
        const duration = parseInt(link.dataset.duration) || 0;

        let show = true;

        // 1. جستجوی متن (نام تور)
        if (search !== "" && !name.includes(search)) {
            show = false;
        }

        // 2. اگر هیچ فیلتری انتخاب نشده باشد → همه نمایش داده شوند
        if (checkedFilters.length === 0) {
            card.style.display = show ? 'block' : 'none';
            return;
        }

        // 3. فیلتر قیمت
        if (checkedFilters.includes('under4') && price >= 4000000) show = false;
        if (checkedFilters.includes('4to6') && (price < 4000000 || price > 6000000)) show = false;

        // 4. فیلتر مکان (location) — اصلاح شده
        const locationFilters = checkedFilters.filter(f =>
            f === 'کیش' || f === 'مشهد' || f === 'قشم' || f === 'چابهار'
        );

        if (locationFilters.length > 0) {
            if (!locationFilters.some(loc => location.includes(loc.toLowerCase()))) {
                show = false;
            }
        }

        // 5. فیلتر مدت زمان
        if (checkedFilters.includes('3day') && duration !== 3) show = false;
        if (checkedFilters.includes('4plus') && duration < 4) show = false;

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