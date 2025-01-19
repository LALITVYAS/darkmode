
  const products = document.querySelectorAll('.product');
  const cartItemsContainer = document.querySelector('.cart-items');
  const totalElement = document.querySelector('.total');

  let cart = {};

  function updateCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    for (const [productName, { quantity, price }] of Object.entries(cart)) {
      if (quantity > 0) {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `${productName} ${quantity} × ${price} = ${quantity * price}`;
        cartItemsContainer.appendChild(cartItem);
        total += quantity * price;
      }
    }

    totalElement.textContent = `Total: ${total}`;
  }

  products.forEach(product => {
    const increaseButton = product.querySelector('.increase');
    const decreaseButton = product.querySelector('.decrease');
    const quantityInput = product.querySelector('.quantity');
    const price = parseInt(product.dataset.price, 10);
    const name = product.dataset.name;

    if (!cart[name]) {
      cart[name] = { quantity: 0, price };
    }

    increaseButton.addEventListener('click', () => {
      cart[name].quantity += 1;
      quantityInput.value = cart[name].quantity;
      updateCart();
    });

    decreaseButton.addEventListener('click', () => {
      if (cart[name].quantity > 0) {
        cart[name].quantity -= 1;
        quantityInput.value = cart[name].quantity;
        updateCart();
      }
    });
  });