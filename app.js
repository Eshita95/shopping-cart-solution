function updateProductNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncreasing == true){
        productNumber = parseInt (productNumber) + 1;
    }
    else if (productNumber > 0 ){
        productNumber = parseInt (productNumber) - 1;
    }
    productInput.value = productNumber;

    // update case price
    const productPrice = document.getElementById(product + '-price');
    productPrice.innerText = productNumber * price;

    // calculate total
    calculateTotal();

}

function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt( productInput.value);
    return productNumber;
}

function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const taxTotal = subTotal / 10;
    const totalPrice = subTotal + taxTotal;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-total').innerText = taxTotal;
    document.getElementById('total-price').innerText = totalPrice;
}

/* phone price update */
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone', 1219 , true);
})

document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, false);
})

/* case price update */
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', 59 , true);
})

document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case', 59 , false);
})