const sectionSkirt = document.getElementById("section-products-skirt");

const products = 6;

for (let i = 1; i <= products; i++) {
	sectionSkirt.innerHTML += `<div id="falda-${i}" class="product-card">
        <img class="product-img" src="../images/faldas/falda${i}.jpeg" alt="falda">
        <div class="product-separator"></div>
            <h2 class="product-title">Falda ${i}</h2>
            <p class="product-price">Precio: $5.000</p>
            <button class="addCart">AGREGAR AL CARRITO</button>
        </div>`;
}
