const sectionPants = document.getElementById("section-products-pants");

const products = 14;

for (let i = 1; i <= products; i++) {
	sectionPants.innerHTML += `<div id="pantalon-${i}" class="product-card">
        <img class="product-img" src="../images/pantalones/pantalon${i}.jpeg" alt="pantalon">
        <div class="product-separator"></div>
            <h2 class="product-title">Pantalon ${i}</h2>
            <p class="product-price">Precio: $5.000</p>
            <button class="addCart">AGREGAR AL CARRITO</button>
        </div>`;
}
