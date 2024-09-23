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