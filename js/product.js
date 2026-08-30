const urlParams = new URLSearchParams(window.location.search);

const productId = Number(urlParams.get("id"));

const product = products.find(function(item) {
    return item.id === productId;
});

if (product) {

    document.getElementById("product-name").textContent = product.name;

    document.getElementById("product-price").textContent =
        `₹${product.price}`;

    document.getElementById("product-description").textContent =
        product.description;

    document.getElementById("product-category").textContent =
        product.category.toUpperCase();
        document.getElementById("detail-product-image").src =
    product.image;

document.getElementById("detail-product-image").alt =
    product.name;

}

let quantity = 1;

const quantityDisplay = document.getElementById("quantity");

document.getElementById("increase").addEventListener("click", function() {

    quantity++;

    quantityDisplay.textContent = quantity;

});


document.getElementById("decrease").addEventListener("click", function() {

    if (quantity > 1) {

        quantity--;

        quantityDisplay.textContent = quantity;

    }

});

document.getElementById("add-product").addEventListener("click", function() {

    if (!product) return;

    const existingProduct = cart.find(function(item) {
        return item.id === product.id;
    });

    if (existingProduct) {

        existingProduct.quantity += quantity;

    } else {

        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity
        });

    }

    saveCart();
    updateCartCount();

    alert(product.name + " added to cart!");

});