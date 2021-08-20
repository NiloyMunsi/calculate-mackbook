function updatePrice(product, price) {
    const productPrice = document.getElementById(product + '-price');
    productPrice.innerText = price;

    calculateTotal();
}


//memory price added
document.getElementById('memory16gb-added').addEventListener('click', function () {
    updatePrice('memory', 180);
})
document.getElementById('memory8gb-added').addEventListener('click', function () {
    updatePrice('memory', 0);
})

//ssd price added
document.getElementById('ssd256gb-added').addEventListener('click', function () {
    updatePrice('ssd', 0);
})

document.getElementById('ssd512gb-added').addEventListener('click', function () {
    updatePrice('ssd', 100);
})
document.getElementById('ssd1tb-added').addEventListener('click', function () {
    updatePrice('ssd', 180);
})

//delivery charge added
document.getElementById('free-added').addEventListener('click', function () {
    updatePrice('delivery', 0);
})
document.getElementById('pay-added').addEventListener('click', function () {
    updatePrice('delivery', 20);
})

// calculate total
function calculateTotal() {
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById('memory-price').innerText;
    const ssdPrice = document.getElementById('ssd-price').innerText;
    const deliveryPrice = document.getElementById('delivery-price').innerText;
    const subtotal =parseInt(bestPrice) + parseInt(memoryPrice) + parseInt(ssdPrice) + parseInt(deliveryPrice);
    document.getElementById('sub-total').innerText = subtotal;
}
