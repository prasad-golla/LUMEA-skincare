const checkoutItems = document.getElementById("checkout-items");
const checkoutTotal = document.getElementById("checkout-total");


function displayCheckout() {

    if (!checkoutItems) return;

    if (cart.length === 0) {

        checkoutItems.innerHTML = `
            <p>Your cart is empty.</p>
            <a href="products.html">
                Continue Shopping
            </a>
        `;

        checkoutTotal.textContent = "₹0";

        return;
    }


    let total = 0;

    checkoutItems.innerHTML = "";


    cart.forEach(function(item) {

        const itemTotal = item.price * item.quantity;

        total += itemTotal;

        const orderItem = document.createElement("div");

        orderItem.classList.add("checkout-item");

        orderItem.innerHTML = `
            <div>
                <h3>${item.name}</h3>
                <p>Quantity: ${item.quantity}</p>
            </div>

            <strong>
                ₹${itemTotal}
            </strong>
        `;

        checkoutItems.appendChild(orderItem);

    });


    checkoutTotal.textContent = `₹${total}`;
}


displayCheckout();


const checkoutForm =
    document.getElementById("checkout-form");


checkoutForm.addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("order-success")
        .classList.add("show");

    localStorage.removeItem("lumeaCart");

    cart = [];

    updateCartCount();

});