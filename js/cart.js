let cart = JSON.parse(localStorage.getItem("lumeaCart")) || [];


function addToCart(productId) {

    const product = products.find(function(item) {
        return item.id === productId;
    });

    const existingProduct = cart.find(function(item) {
        return item.id === productId;
    });


    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });

    }


    saveCart();

    updateCartCount();

    alert(product.name + " added to cart!");
}


function saveCart() {

    localStorage.setItem(
        "lumeaCart",
        JSON.stringify(cart)
    );

}


function updateCartCount() {

    const cartCount = document.getElementById("cart-count");

    if (!cartCount) return;

    let totalItems = 0;

    cart.forEach(function(item) {
        totalItems += item.quantity;
    });

    cartCount.textContent = totalItems;

}


updateCartCount();
function displayCart() {

    const cartContainer = document.getElementById("cart-container");

    if (!cartContainer) return;

    if (cart.length === 0) {

        cartContainer.innerHTML = `
            <div class="empty-cart">
                <h2>Your cart is empty</h2>
                <p>Discover something beautiful for your daily ritual.</p>
                <a href="products.html" class="hero-button">
                    Continue Shopping
                </a>
            </div>
        `;

        return;
    }


    let total = 0;

    cartContainer.innerHTML = `
        <div class="cart-items"></div>

        <div class="cart-summary">
            <h2>Order Summary</h2>
            <p>Subtotal: <strong id="cart-total">₹0</strong></p>
           <button
    class="checkout-btn"
    onclick="window.location.href='checkout.html'">
    Checkout
</button>
        </div>
    `;


    const cartItems = document.querySelector(".cart-items");


    cart.forEach(function(item) {

        total += item.price * item.quantity;

        const cartItem = document.createElement("div");

        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p>₹${item.price}</p>
            </div>

            <div class="cart-controls">

                <button onclick="decreaseQuantity(${item.id})">
                    −
                </button>

                <span>${item.quantity}</span>

                <button onclick="increaseQuantity(${item.id})">
                    +
                </button>

            </div>

            <strong>
                ₹${item.price * item.quantity}
            </strong>

            <button 
                class="remove-btn"
                onclick="removeFromCart(${item.id})">
                Remove
            </button>

        `;

        cartItems.appendChild(cartItem);

    });


    document.getElementById("cart-total").textContent = `₹${total}`;
}


function increaseQuantity(productId) {

    const item = cart.find(function(product) {
        return product.id === productId;
    });

    if (item) {
        item.quantity++;
    }

    saveCart();
    displayCart();
    updateCartCount();
}


function decreaseQuantity(productId) {

    const item = cart.find(function(product) {
        return product.id === productId;
    });

    if (item) {

        item.quantity--;

        if (item.quantity <= 0) {
            cart = cart.filter(function(product) {
                return product.id !== productId;
            });
        }
    }

    saveCart();
    displayCart();
    updateCartCount();
}


function removeFromCart(productId) {

    cart = cart.filter(function(product) {
        return product.id !== productId;
    });

    saveCart();
    displayCart();
    updateCartCount();
}


displayCart();