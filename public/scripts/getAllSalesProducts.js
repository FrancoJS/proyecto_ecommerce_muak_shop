const sectionProducts = document.getElementById("section-products");
const urlFakeStoreApi = "https://fakestoreapi.com/products";
let productData = [];
fetch(urlFakeStoreApi)
	.then((res) => res.json())
	.then((data) => {
		productData = data;
		console.log(data);
		displayProducts(productData);
	});

const displayProducts = (products) => {
	products.forEach(({ title, category, price, image, id }) => {
		sectionProducts.innerHTML += `<div id="${id}" class="product-card">
        <img class="product-img" src="${image}" alt="${category} avatar">
        <div class="product-separator"></div>
            <h2 class="product-title">${title.length > 20 ? title.slice(0, 20) + "..." : title}</h2>
            <p class="product-price">Precio: $${price}</p>
            <button class="addCart">AGREGAR AL CARRITO</button>
        </div>`;
	});
};
