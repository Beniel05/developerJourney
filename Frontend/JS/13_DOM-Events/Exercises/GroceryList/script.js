// You only need to select the form and the output list
const form = document.querySelector('form');
const list = document.getElementById("list");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Access elements directly from the form using their 'name' attributes
    const qtyInput = form.elements.qty;
    const productInput = form.elements.product;

    if (qtyInput.value <= 0) {
        alert("Qty cannot be 0 or negative.");
        return;
    }

    if (productInput.value.trim() === '') {
        alert("Product name cannot be empty");
        return;
    }
    
    const li = document.createElement('li');
    li.innerText = `${qtyInput.value} ${productInput.value}`;
    list.append(li);

    // Clears all inputs in the form automatically!
    form.reset();
});



// const form = document.querySelector('form');
// const qty = document.getElementById('qty');
// const product = document.getElementById('product');
// const list = document.getElementById("list");

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
    
//     let qtyValue = qty.value;
//     let productName = product.value;

//     if(qtyValue <= 0) {
//         alert("Qty cannot be 0 or negative.");
//         return;
//     }

//     if(productName.trim() == '') {
//         alert("Product name cannot be empty");
//         return;
//     }
    
//     const li = document.createElement('li');
//     li.innerText = `${qtyValue} ${productName}`;
//     list.appendChild(li);

//     product.value = '';
//     qty.value = '';
// });