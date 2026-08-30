const productContainer = document.getElementById("product-container");

function displayProducts(productList) {

    productContainer.innerHTML = "";

    productList.forEach(function(product) {

        const card = document.createElement("div");

        card.classList.add("product-card");

        card.innerHTML = `
            
           <a href="product.html?id=${product.id}" class="product-link">

   <img 
    src="${product.image}" 
    alt="${product.name}"
    class="product-photo"
>
</div>

        <span class="product-category">
            ${product.category}
        </span>
    </div>

</a>

            <div class="product-info">

                <h3>
    <a href="product.html?id=${product.id}">
        ${product.name}
    </a>
         </h3>

                <p>${product.description}</p>

                <strong>₹${product.price}</strong>

            </div>

            <button onclick="addToCart(${product.id})">
                Add to Cart
            </button>

        `;

        productContainer.appendChild(card);

    });
}


displayProducts(products);

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const category = button.dataset.category;

        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        if (category === "all") {

            displayProducts(products);

        } else {

            const filteredProducts = products.filter(function(product) {

                return product.category === category;

            });

            displayProducts(filteredProducts);
        }

    });

});