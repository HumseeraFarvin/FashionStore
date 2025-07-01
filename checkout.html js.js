<script>
  document.getElementById('checkout-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const orderId = "FS" + Math.floor(10000 + Math.random() * 90000); // e.g. FS12345

    const newOrder = {
      id: orderId,
      name,
      email,
      address,
      items: cart,
      total: total.toFixed(2),
      date: new Date().toLocaleString()
    };

    // Save to order history
    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
    existingOrders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(existingOrders));

    // Save the latest order separately for confirmation page
    localStorage.setItem('latestOrder', JSON.stringify(newOrder));

    // Clear cart and go to success page
    localStorage.removeItem('cart');
    window.location.href = 'order-success.html';
  });
</script>
