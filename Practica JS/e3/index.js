const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];


////ejercicos
const searchForm = document.getElementById("searchForm");
const idInput = document.getElementById("idInput");
const resultadoContainer = document.getElementById("resultadoContainer");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const id = parseInt(idInput.value);
  const pizzaEncontrada = pizzas.find(pizza => pizza.id === id);

  if (pizzaEncontrada) {
    renderizarPizza(pizzaEncontrada);
    localStorage.setItem("ultimaPizza", JSON.stringify(pizzaEncontrada));
  } else {
    resultadoContainer.innerHTML = "No se encontró una pizza con ese ID.";
  }
});

function renderizarPizza(pizza) {
  resultadoContainer.innerHTML = `
    <div class="pizza-card">
      <h2>${pizza.nombre}</h2>
      <img src="${pizza.imagen}" alt="${pizza.nombre}">
      <p>Precio: $${pizza.precio}</p>
    </div>
  `;
}

// Cargar la última pizza buscada al recargar la página
document.addEventListener("DOMContentLoaded", () => {
  const ultimaPizzaGuardada = localStorage.getItem("ultimaPizza");
  if (ultimaPizzaGuardada) {
    const ultimaPizza = JSON.parse(ultimaPizzaGuardada);
    renderizarPizza(ultimaPizza);
  }
});