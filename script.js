let totalPrice = 0;
let orderItems = [];

function addToOrder(item, price, quantityId) {
    const quantity = document.getElementById(quantityId).value;
    const orderList = document.getElementById('order-list');
    const newItem = document.createElement('li');
    const itemPrice = price * quantity;

    newItem.textContent = `${item} x ${quantity} - $${itemPrice}`;
    newItem.setAttribute('data-price', itemPrice);
    newItem.setAttribute('data-item', item);

    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.classList.add('remove-btn');
    removeButton.onclick = function() {
        removeFromOrder(newItem, itemPrice);
    };

    newItem.appendChild(removeButton);
    orderList.appendChild(newItem);

    totalPrice += itemPrice;
    document.getElementById('total-price').textContent = totalPrice;
    orderItems.push({ item, price, quantity });
}

function removeFromOrder(itemElement, price) {
    itemElement.remove();
    totalPrice -= price;
    document.getElementById('total-price').textContent = totalPrice;
}

function clearOrder() {
    document.getElementById('order-list').innerHTML = '';
    totalPrice = 0;
    document.getElementById('total-price').textContent = totalPrice;
}

function placeOrder() {
    if (totalPrice === 0) {
        alert('Your order is empty!');
    } else {
        alert(`Your order has been placed! Total: $${totalPrice}`);
        clearOrder();
    }
}
