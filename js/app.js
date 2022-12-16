
// //plus and minus the phone quanitiy


// //plus quantity
// document.getElementById('phone-plus').addEventListener('click', function () {
//     const plusNum = document.getElementById('phone-number');
//     const phoneInputText = plusNum.value;
//     const phoneInputNum = parseInt(phoneInputText) + 1;
//     plusNum.value = phoneInputNum;
// })

// //minus quantity
// document.getElementById('phone-minus').addEventListener('click', function () {
//     const minusNum = document.getElementById('phone-number');
//     const phoneInputText = minusNum.value;
//     if (phoneInputText > 0) {
//         const phoneInputNum = parseInt(phoneInputText) - 1;
//         minusNum.value = phoneInputNum;
//     }


// })
// //plus and minus case quantity



// //plus quantity
// document.getElementById('case-plus').addEventListener('click', function () {
//     const plusNum = document.getElementById('case-number');
//     const caseInputText = plusNum.value;
//     const caseInputNum = parseInt(caseInputText) + 1;
//     plusNum.value = caseInputNum;
// })
// //minus quantity
// document.getElementById('case-minus').addEventListener('click', function () {
//     const minusNum = document.getElementById('case-number');
//     const caseInputText = minusNum.value;
//     if (caseInputText > 0) {
//         const caseInputNum = parseInt(caseInputText) - 1;
//         minusNum.value = caseInputNum;
//     }


// })





//handle add and minus quantity dinamicly

function quantityHandler(product, price, isIncreasing) {
    const phoneInput = document.getElementById(product + '-number');
    let phoneInputText = phoneInput.value;
    if (isIncreasing == true) {
        phoneInputText = parseInt(phoneInputText) + 1;

    } else if (isIncreasing == false && phoneInputText > 0) {
        phoneInputText = parseInt(phoneInputText) - 1;

    }

    phoneInput.value = phoneInputText;

    //updating pric with plus and minus
    const updateProduct = document.getElementById(product + '-total');
    updateProduct.innerText = phoneInputText * price;

    calculateTotal();
}

//add quantity price with subtotal
function productQuantityHandler(product) {
    const Quantity = document.getElementById(product + '-number')
    const QuantityNumber = parseInt(Quantity.value)
    return QuantityNumber;
}

function calculateTotal() {
    const phoneTotal = productQuantityHandler('phone') * 999;
    const caseTotal = productQuantityHandler('case') * 59;

    //add subtotal in html
    const subTotal = phoneTotal + caseTotal;
    //calculate the tax
    const tax = subTotal / 15;
    //calculate the total ammount
    const totalPrice = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-ammount').innerText = tax.toFixed(2);
    document.getElementById('total-price').innerText = totalPrice.toFixed(2);



}
function newdoc() {
    window.location.href = 'checkout.html';
}

//plus and minus the phone quanitiy


//plus quantity
document.getElementById('phone-plus').addEventListener('click', function () {
    quantityHandler('phone', 999, true);
})

//minus quantity
document.getElementById('phone-minus').addEventListener('click', function () {
    quantityHandler('phone', 999, false);


})



//plus and minus case quantity
//plus quantity
document.getElementById('case-plus').addEventListener('click', function () {
    quantityHandler('case', 59, true);
})

//minus quantity
document.getElementById('case-minus').addEventListener('click', function () {

    quantityHandler('case', 59, false);


})


