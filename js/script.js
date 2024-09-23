// global variable
let mainBalance = getText('balance');


const noakhaliBtn = document.getElementById('khaliBtn');
let noakhaliBalance = getText('noakhaliBalance');

const feniBtn = document.getElementById('feniBtn');
let feniBalance = getText('feniBalance');

const quotaBtn = document.getElementById('quotaBtn');   
let quotaBalance = getText('quotaBalance');

// validation



// blog page navigate
function faqPage(){
    window.location.href = '../faq.html'
}
function homePage(){
    window.location.href = '../index.html'
}

// common function

function getValue(id){
    const value = parseFloat(document.getElementById(id).value);
    return value;
}

function getText(id){
    const text = parseFloat(document.getElementById(id).innerText);
    return text;
}
function getId(id){
    const identity = document.getElementById(id);
    return identity;
}

// Noakhali part 01

noakhaliBtn.addEventListener('click', function(){
    const inputValue1 = getValue('khaliInput');
    if(inputValue1 <= 0 || isNaN(inputValue1)){
        alert('Please Enter Valid Input')
        return;
    }
    noakhaliBalance = noakhaliBalance + inputValue1;
   mainBalance = mainBalance - inputValue1

    getId('noakhaliBalance').innerText = noakhaliBalance;
    getId('balance').innerText = mainBalance;
})

// feni part 02

feniBtn.addEventListener('click', function(){
    const inputValue2 = getValue('feniInput');
    if(inputValue2 <= 0 || isNaN(inputValue2)){
        alert('Please Enter Valid Input')
        return;
    }
    feniBalance = feniBalance + inputValue2;
   mainBalance = mainBalance - inputValue2

    getId('feniBalance').innerText = feniBalance;
    getId('balance').innerText = mainBalance;
})







