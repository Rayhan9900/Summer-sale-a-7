

document.getElementById('btn primary').addEventListener('click', function () {
    const heading = document.getElementById('heading')
    const title = document.getElementById('title');
    const newTitle = title.innerText;
    heading.append(newTitle);

    const totalPrice = document.getElementById('total-price')
    const previousTotalString = totalPrice.innerText;
    const previousTotal = parseFloat(previousTotalString);

    const price = document.getElementById('price')
    const newPrice = price.innerText;
    const newTotal = parseFloat(newPrice);

    const total = previousTotal + newTotal;
    totalPrice.innerText = total
})


document.getElementById('btn primary2').addEventListener('click', function () {
    const heading2 = document.getElementById('heading2')
    const title2 = document.getElementById('title2');
    const newTitle = title2.innerText;
    heading2.append(newTitle);

    const totalPrice = document.getElementById('total-price')
    const previousTotalString = totalPrice.innerText;
    const previousTotal = parseFloat(previousTotalString);

    const price = document.getElementById('price2')
    const newPrice = price.innerText;
    const newTotal = parseFloat(newPrice);

    const total = previousTotal + newTotal;
    totalPrice.innerText = total;
})


document.getElementById('btn primary3').addEventListener('click', function () {
    const heading3 = document.getElementById('heading3')
    const title3 = document.getElementById('title3');
    const newTitle = title3.innerText;
    heading3.append(newTitle);

    const totalPrice = document.getElementById('total-price')
    const previousTotalString = totalPrice.innerText;
    const previousTotal = parseFloat(previousTotalString);

    const price = document.getElementById('price3')
    const newPrice = price.innerText;
    const newTotal = parseFloat(newPrice);

    const total = previousTotal + newTotal;
    totalPrice.innerText = total;
})

// second section

document.getElementById('card-section').addEventListener('click', function () {
    const content = document.getElementById('content')
    const section = document.getElementById('section');
    const newTitle = section.innerText;
    content.append(newTitle);
})

document.getElementById('card-section2').addEventListener('click', function () {
    const content2 = document.getElementById('content2')
    const section2 = document.getElementById('section2');
    const newTitle = section2.innerText;
    content2.append(newTitle);
})

document.getElementById('card-section3').addEventListener('click', function () {
    const content3 = document.getElementById('content3')
    const section3 = document.getElementById('section3');
    const newTitle = section3.innerText;
    content3.append(newTitle);
})

const inputField = document.getElementById('discount-field');
const submitButton = document.getElementById('btn-discount');

inputField.addEventListener('input', function () {
    if (inputField.value === 'SELL200') {
        submitButton.removeAttribute('disabled');
    }
    else {
        submitButton.setAttribute('disabled', 'disabled');
    }
});

document.getElementById('btn-discount').addEventListener('click', function () {
    const total = document.getElementById('total-price');
    const totalString = parseFloat(total.innerText);
    const discountPrice = totalString * 20 / 100;

    const discountId = document.getElementById('discount')
    discountId.innerText = discountPrice;

    const totalId = document.getElementById('total')
    const newTotal = totalString - discountPrice;
    totalId.innerText = newTotal;
})



const totalPrice = document.getElementById('total-price');
const buttonSubmit = document.getElementById('purchase');

function enableButtonIfNeeded() {
    const total = parseFloat(totalPrice.textContent);

    if (total > 0) {
        buttonSubmit.removeAttribute('disabled');
    } else {
        buttonSubmit.setAttribute('disabled', 'disabled');
    }
}

document.getElementById('purchase').addEventListener('click', function () {
    alert('CONGRATULATION!!');
})

enableButtonIfNeeded()

totalPrice.addEventListener('DOMSubtreeModified', enableButtonIfNeeded)

