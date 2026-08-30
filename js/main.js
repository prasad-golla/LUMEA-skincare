const featuredContainer = document.getElementById("featured-products");

if (featuredContainer) {

    const featuredProducts = products.slice(0, 3);

    featuredProducts.forEach(function(product) {

        const card = document.createElement("div");

        card.classList.add("product-card");

        card.innerHTML = `
            
            <a href="product.html?id=${product.id}" class="product-link">

                <div class="product-image">

                 <img 
       src="${product.image}" 
       alt="${product.name}"
    class="product-photo"
     >

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

        featuredContainer.appendChild(card);

    });

}

const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

if (menuBtn) {
    menuBtn.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
}