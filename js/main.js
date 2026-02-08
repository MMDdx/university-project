


// تابع برای ایجاد .error اگر وجود نداشته باشه
function getErrorElement(parent) {
    let error = parent.querySelector('.error');
    if (!error) {
        error = document.createElement('div');
        error.className = 'error';
        parent.appendChild(error);
    }
    return error;
}


function onlinePaymentValidation(event) {
        let isValid = true;

        // شماره کارت (۱۶ رقم)
        const cardNumber = document.getElementById('card-number');
        const cardError = cardNumber.parentElement.querySelector('.error');
        const cardRegex = /^\d{16}$/;
        if (!cardNumber.value.trim()) {
            cardError.textContent = 'شماره کارت ضروری است';
            cardError.style.display = 'block';
            isValid = false;
        } else if (!cardRegex.test(cardNumber.value)) {
            cardError.textContent = 'شماره کارت باید دقیقاً ۱۶ رقم باشد';
            cardError.style.display = 'block';
            isValid = false;
        } else {
            cardError.textContent = '';
            cardError.style.display = 'none';
        }

        // CVV2 (۳ یا ۴ رقم)
        const cvv = document.getElementById('cvv');
        const cvvError = cvv.parentElement.querySelector('.error');
        const cvvRegex = /^\d{3,4}$/;
        if (!cvv.value.trim()) {
            cvvError.textContent = 'CVV2 ضروری است';
            cvvError.style.display = 'block';
            isValid = false;
        } else if (!cvvRegex.test(cvv.value)) {
            cvvError.textContent = 'CVV2 باید ۳ یا ۴ رقم باشد';
            cvvError.style.display = 'block';
            isValid = false;
        } else {
            cvvError.textContent = '';
            cvvError.style.display = 'none';
        }

        // تاریخ انقضا (MM/YY)
        const expire = document.getElementById('expire');
        const expireError = expire.parentElement.querySelector('.error');
        const expireRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
        if (!expire.value.trim()) {
            expireError.textContent = 'تاریخ انقضا ضروری است';
            expireError.style.display = 'block';
            isValid = false;
        } else if (!expireRegex.test(expire.value)) {
            expireError.textContent = 'فرمت تاریخ انقضا باید YY/MM باشد';
            expireError.style.display = 'block';
            isValid = false;
        } else {
            expireError.textContent = '';
            expireError.style.display = 'none';
        }

        if (!isValid) {
            event.preventDefault(); // جلوگیری از ارسال فرم
        }
}



function validateContactForm (event) {

    let isValid = true;

    // name
    const name = document.getElementById('name');
    const nameError = name.parentElement.querySelector('.error');
    if (!name.value.trim()) {
        nameError.textContent = 'نام ضروری است';
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.textContent = '';
        nameError.style.display = 'none';
    }

    // email
    const email = document.getElementById('email');
    const emailError = email.parentElement.querySelector('.error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
        emailError.textContent = 'ایمیل ضروری است';
        emailError.style.display = 'block';
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        emailError.textContent = 'ایمیل نامعتبر است';
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.textContent = '';
        emailError.style.display = 'none';
    }

    // message
    const message = document.getElementById('message');
    const messageError = message.parentElement.querySelector('.error');
    if (!message.value.trim()) {
        messageError.textContent = 'پیام ضروری است';
        messageError.style.display = 'block';
        isValid = false;
    } else {
        messageError.textContent = '';
        messageError.style.display = 'none';
    }

    if (!isValid) {
        event.preventDefault();
    }
}

function validateSignInForm (event) {
    let isValid = true;

    // email
    const email = document.getElementById('email');
    const emailError = email.parentElement.querySelector('.error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
        emailError.textContent = 'ایمیل ضروری است';
        emailError.style.display = 'block';
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        emailError.textContent = 'ایمیل نامعتبر است';
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.textContent = '';
        emailError.style.display = 'none';
    }

    // password
    const password = document.getElementById('password');
    const passwordError = password.parentElement.querySelector('.error');
    if (!password.value.trim()) {
        passwordError.textContent = 'رمز عبور ضروری است';
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        passwordError.textContent = '';
        passwordError.style.display = 'none';
    }

    if (!isValid) {
        event.preventDefault();
    }
}


function validateSignUpForm(event) {
    let isValid = true;

    // fullname
    const fullname = document.getElementById('fullname');
    const fullnameError = getErrorElement(fullname.parentElement);
    if (fullname.value.trim().length < 3) {
        fullnameError.textContent = 'نام کامل حداقل ۳ کاراکتر باشد';
        fullnameError.style.display = 'block';
        isValid = false;
    } else {
        fullnameError.textContent = '';
        fullnameError.style.display = 'none';
    }

    // email
    const email = document.getElementById('email');
    const emailError = getErrorElement(email.parentElement);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        emailError.textContent = 'ایمیل نامعتبر است';
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.textContent = '';
        emailError.style.display = 'none';
    }

    // phone
    const phone = document.getElementById('phone');
    const phoneError = getErrorElement(phone.parentElement);
    const phoneRegex = /^09\d{9}$/;
    if (!phoneRegex.test(phone.value)) {
        phoneError.textContent = 'شماره موبایل نامعتبر است (مانند ۰۹۱۲۳۴۵۶۷۸۹)';
        phoneError.style.display = 'block';
        isValid = false;
    } else {
        phoneError.textContent = '';
        phoneError.style.display = 'none';
    }

    // password
    const password = document.getElementById('password');
    const passwordError = getErrorElement(password.parentElement);
    if (password.value.length < 6) {
        passwordError.textContent = 'رمز عبور حداقل ۶ کاراکتر باشد';
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        passwordError.textContent = '';
        passwordError.style.display = 'none';
    }

    // confirm-password
    const confirmPassword = document.getElementById('confirm-password');
    const confirmError = getErrorElement(confirmPassword.parentElement);
    if (confirmPassword.value !== password.value) {
        confirmError.textContent = 'تکرار رمز عبور با رمز عبور مطابقت ندارد';
        confirmError.style.display = 'block';
        isValid = false;
    } else {
        confirmError.textContent = '';
        confirmError.style.display = 'none';
    }

    // ضروری‌ها برای همه
    [fullname, email, phone, password, confirmPassword].forEach(field => {
        const error = getErrorElement(field.parentElement);
        if (!field.value.trim()) {
            error.textContent = 'این فیلد ضروری است';
            error.style.display = 'block';
            isValid = false;
        }
    });

    if (!isValid) {
        event.preventDefault();
    }
}


function filterTours() {
    const search = document.getElementById('search-input').value.toLowerCase().trim();
    const cards = document.querySelectorAll('.tour-card');

    // جمع‌آوری همه فیلترهای انتخاب شده (radio)
    const checkedFilters = Array.from(document.querySelectorAll('input[type="radio"]:checked'))
        .map(cb => cb.value)
        .filter(val => val !== "");   // خالی‌ها را حذف کنیم


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

document.addEventListener('DOMContentLoaded', () => {
    const signUpForm = document.querySelector('#signup-form');
    const loginForm = document.querySelector('#signin-form');
    const contactForm = document.querySelector("#contact-form")
    const filteringBtns = document.querySelectorAll('label.md-radio input');
    const paymentForm  = document.getElementById('payment-form')


    if (signUpForm) {
        signUpForm.addEventListener('submit', validateSignUpForm);

    } else if (loginForm){
        loginForm.addEventListener('submit', validateSignInForm);

    }
    else if (contactForm){

        contactForm.addEventListener('submit', validateContactForm);
    } else if (filteringBtns.length) {

        filteringBtns.forEach(Btn => {
            Btn.onchange = filterTours
        })

    }
    else if (paymentForm) {
        const urlParams = new URLSearchParams(window.location.search);
        const total = urlParams.get('total');
        document.getElementById('total-price').textContent = parseInt(total).toLocaleString() || '۰';

        paymentForm.onsubmit = onlinePaymentValidation
    }
    console.log(paymentForm)

});


let buttons = document.querySelectorAll(".cart-section button")

for (const btn of buttons) {
    btn.onclick = addToCart
}