
const tituloPrincipal = document.getElementById("titulo");
const tituloSec = document.getElementById("subtitulo");
const catalogos = document.getElementsByClassName("catalogoMain");
const divHijo = document.getElementsByTagName("div");
const descripcion = document.getElementsByTagName("h3");
const pieDePagina = document.createElement("footer");


console.log(tituloPrincipal);
console.log(tituloSec);
console.log(catalogos);
console.log(divHijo[0].innerHTML);
console.log(divHijo[4].innerHTML);


console.log(descripcion[0].innerText = "Casco reforzado para moto");

descripcion[1].innerText = "escapes deportivos para motos";
descripcion[2].innerText = "Kit de plasticos para motos";
descripcion[3].innerText = "Trasmision completa para motos";

pieDePagina.innerHTML = "Todos los derechos reservados";
document.body.append(pieDePagina);


const btnSearch = document.querySelector("button");
const inputs = document.querySelectorAll("input");

btnSearch.addEventListener("click", () => {
    console.log("hiciste click");
}
);

const inputSearch = inputs[0];

inputSearch.addEventListener("keydown", () => {
    console.log(inputSearch.value);
}
)

localStorage.setItem("saludo", "Bienvenido a nuestra pagina");
localStorage.setItem("darkMode", true);
localStorage.setItem("edad", 18);


localStorage.removeItem("darkMode");


const product = { nombre: "aceite mineral", precio: 2500 }

const prodEnJson = JSON.stringify(product);
console.log(prodEnJson);
localStorage.setItem("producto", prodEnJson);

const desdePG = JSON.parse(localStorage.getItem("producto"))
console.log(desdePG.nombre);




























































































































