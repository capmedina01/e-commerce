const container = document.getElementById("container-cards");
const url = "https://fakestoreapi.com/products";
const cartIcon = document.getElementById("cart-icon");
const cartCount = document.getElementById("cart-count");

/*window.addEventListener("DOMContentLoaded", );*/

const getAllProducts = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  data.forEach((element) => {
    createCard(element);
  });
};
getAllProducts(url);
updateCartCount();

function createCard(element) {
  const divCard = document.createElement("div");
  const divImg = document.createElement("div");
  const divDescription = document.createElement("div");
  const addToCartButton = document.createElement("button");

  divCard.classList.add("divCards");
  divImg.classList.add("divImg");
  divDescription.classList.add("divDescription");
  divCard.id = element.id;

  const imgCard = document.createElement("img");
  imgCard.alt = element.title;
  imgCard.src = element.image;

  const description = document.createElement("p");
  description.textContent = element.description;

  const price = document.createElement("h3");
  price.textContent = element.price;

  const categoryCard = document.createElement("h4");
  categoryCard.textContent = element.category;

  addToCartButton.textContent = "Añadir al carrito";
  addToCartButton.addEventListener("click", () => addToCart(product));

  divImg.appendChild(imgCard);
  divDescription.appendChild(description);
  divDescription.appendChild(price);
  divDescription.appendChild(categoryCard);
  divCard.appendChild(divImg);
  divCard.appendChild(divDescription);
  divCard.appendChild(addToCartButton);

  container.appendChild(divCard);
}
