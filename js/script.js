// global variable
let mainBalance = getText('balance');


const noakhaliBtn = document.getElementById('khaliBtn');
let noakhaliBalance = getText('noakhaliBalance');

const feniBtn = document.getElementById('feniBtn');
let feniBalance = getText('feniBalance');

const quotaBtn = document.getElementById('quotaBtn');
let quotaBalance = getText('quotaBalance');


// blog page navigate
function faqPage() {
    window.location.href = '../faq.html'
}
function homePage() {
    window.location.href = '../index.html'
}

// common function

function getValue(id) {
    const value = parseFloat(document.getElementById(id).value);
    return value;
}

function getText(id) {
    const text = parseFloat(document.getElementById(id).innerText);
    return text;
}
function getId(id) {
    const identity = document.getElementById(id);
    return identity;
}



// Noakhali part 01

noakhaliBtn.addEventListener('click', function () {
    const inputValue1 = getValue('khaliInput');
    if (inputValue1 <= 0 || isNaN(inputValue1)) {
        alert('Please Enter Valid Input')
        return;
    }
    if (inputValue1 > mainBalance) {
        alert('You Dont Have Sufficient Balance')
        return;
    }
    noakhaliBalance = noakhaliBalance + inputValue1;
    mainBalance = mainBalance - inputValue1

    getId('noakhaliBalance').innerText = noakhaliBalance;
    getId('balance').innerText = mainBalance;

    const time = new Date();
    const div = document.createElement('div');
    div.classList.add('border', 'border-[#1111111a]', 'rounded-2xl', 'p-8', 'mt-5');
    div.innerHTML = `
        <h2 class="text-lg font-bold mb-4">${inputValue1} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h2>
        <p>Date : ${time}</p>
    `;

    const history = document.getElementById('history-section');


    history.insertBefore(div, history.firstChild);
    my_modal_1.showModal()

})

// feni part 02

feniBtn.addEventListener('click', function () {
    const inputValue2 = getValue('feniInput');
    if (inputValue2 <= 0 || isNaN(inputValue2)) {
        alert('Please Enter Valid Input')
        return;
    }
    if (inputValue2 > mainBalance) {
        alert('You Dont Have Sufficient Balance')
        return;
    }
    feniBalance = feniBalance + inputValue2;
    mainBalance = mainBalance - inputValue2

    getId('feniBalance').innerText = feniBalance;
    getId('balance').innerText = mainBalance;

    const time = new Date();
    const div = document.createElement('div');
    div.classList.add('border', 'border-[#1111111a]', 'rounded-2xl', 'p-8', 'mt-5');
    div.innerHTML = `
        <h2 class="text-lg font-bold mb-4">${inputValue2} Taka is Donated for Flood Relief in Feni,Bangladesh</h2>
        <p>Date : ${time}</p>
    `;

    const history = document.getElementById('history-section');


    history.insertBefore(div, history.firstChild);
    my_modal_1.showModal()
})

// quota part 03

quotaBtn.addEventListener('click', function () {
    const inputValue3 = getValue('quotaInput');
    if (inputValue3 <= 0 || isNaN(inputValue3)) {
        alert('Please Enter Valid Input')
        return;
    }
    if (inputValue3 > mainBalance) {
        alert('You Dont Have Sufficient Balance')
        return;
    }
    quotaBalance = quotaBalance + inputValue3;
    mainBalance = mainBalance - inputValue3

    getId('quotaBalance').innerText = quotaBalance;
    getId('balance').innerText = mainBalance;

    const time = new Date();
    const div = document.createElement('div');
    div.classList.add('border', 'border-[#1111111a]', 'rounded-2xl', 'p-8', 'mt-5');

    div.innerHTML = `
        <h2 class="text-lg font-bold mb-4">${inputValue3} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h2>
        <p>Date : ${time}</p>
    `;

    const history = document.getElementById('history-section');


    history.insertBefore(div, history.firstChild);
    my_modal_1.showModal()
})

// donation and history toggle

function historyPart() {
    const btn = getId('donateBtn')
    btn.classList.remove('bg-Primary')
    btn.classList.add('border-gray-500')
    const btn2 = getId('historyBtn');
    btn2.classList.remove('border-gray-500')
    btn2.classList.add('bg-Primary')
    const main = getId('main-container');
    main.classList.add('hidden')
    const history = getId('history-section')
    history.classList.remove('hidden')
    const header = getId('header')
    header.classList.remove('fixed')
    header.classList.remove('top-0')
    header.classList.remove('left-0')
    header.classList.remove('w-full')



}

function donation() {
    const btn = getId('donateBtn')
    const btn2 = getId('historyBtn');
    btn.classList.add('bg-Primary')
    btn.classList.remove('border-gray-500')
    btn2.classList.add('border-gray-500')
    btn2.classList.remove('bg-Primary')
    const main = getId('main-container');
    main.classList.remove('hidden')
    const history = getId('history-section')
    history.classList.add('hidden')
    const header = getId('header')
    header.classList.add('fixed')
    header.classList.add('top-0')
    header.classList.add('left-0')
    header.classList.add('w-full')
}


// fixed top-0 left-0 w-full



