document.addEventListener("DOMContentLoaded", () => {
    const cart = [];
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const product = button.getAttribute('data-product');
            const price = parseFloat(button.getAttribute('data-price'));

            // Agregar el producto al carrito
            cart.push({ product, price });
            updateCart();
        });
    });

    function updateCart() {
        // Limpiar los elementos actuales del carrito
        cartItems.innerHTML = '';

        // Calcular el nuevo total
        let total = 0;

        cart.forEach((item, index) => {
            total += item.price;
            const li = document.createElement('li');
            li.textContent = `${item.product} - $${item.price}`;
            
            // Botón de eliminar
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Eliminar';
            removeButton.addEventListener('click', () => {
                cart.splice(index, 1);
                updateCart();
            });

            li.appendChild(removeButton);
            cartItems.appendChild(li);
        });

        totalElement.textContent = total.toFixed(2);
    }
});
