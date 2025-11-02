import { useCart } from "../context/Cartcontext";

const CartPage = () => {
  const { cartItems, incrementItem, decrementItem, removeFromCart, total } = useCart();

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-3"
            >
              <div className="flex items-center gap-3">
                <img src={item.img} alt={item.name} className="w-16 h-16 rounded" />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>₹{item.price}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => decrementItem(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => incrementItem(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 font-medium"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6">
            <h2 className="text-xl font-semibold">Total: ₹{total}</h2>

            {/* ✅ Proceed Button for future Payment Gateway */}
            <button
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
              onClick={() => alert('Proceeding to payment (coming soon)')}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
