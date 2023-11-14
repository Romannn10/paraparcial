import catalogo from "./catalogo.js";

const contenedor = document.getElementById("contenedor-catalogo");

let contenidoArticulos = "";

catalogo.articulos.forEach((articulo) => {
    contenidoArticulos += `<article class="articulo">
    <img src="${articulo.imagen}" alt="">
    <div class="articulo__datos">
        <h3>${articulo.nombre}</h3>
        <p>${articulo.descripcion}</p>
    </div>
</article>`;
});

contenedor.innerHTML = contenidoArticulos;
