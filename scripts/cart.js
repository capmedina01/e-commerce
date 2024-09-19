let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartItemsContainer = document.getElementById("cart-items");
const cartTotalElement = document.getElementById("cart-total");

function clearCartItems() {
  while (cartItemsContainer.firstChild) {
    cartItemsContainer.removeChild(cartItemsContainer.firstChild);
  }
}

function displayCartItems() {
  clearCartItems();

  if (cart.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "No hay productos en el carrito.";
    cartItemsContainer.appendChild(emptyMessage);
    return;
  }

  cart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.title;
    img.style.width = "100px";

    const title = document.createElement("h3");
    title.textContent = item.title;

    const price = document.createElement("p");
    price.textContent = `Precio: $${item.price}`;

    const quantity = document.createElement("p");
    quantity.textContent = `Cantidad: ${item.quantity}`;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Eliminar";
    removeButton.addEventListener("click", () => removeFromCart(item.id));

    cartItem.appendChild(img);
    cartItem.appendChild(title);
    cartItem.appendChild(price);
    cartItem.appendChild(quantity);
    cartItem.appendChild(removeButton);

    cartItemsContainer.appendChild(cartItem);
  });

  updateCartTotal();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCartItems();
}

function updateCartTotal() {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotalElement.textContent = total.toFixed(2);
}

document.addEventListener("DOMContentLoaded", displayCartItems);
