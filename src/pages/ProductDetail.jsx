import { useParams, Link } from "react-router-dom";
import products from "../store/Product";
import { useCart } from "../context/Cartcontext"; // ✅ import context
import { Star } from "lucide-react";


function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart(); // ✅ get addToCart function

  if (!product) return <div className="text-center mt-10 text-red-500">Product not found</div>;

  return (
    <>
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
        
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row gap-10">
        {/* Image */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <img
            src={product.img}
            alt={product.name}
            className="w-80 md:w-[400px] rounded-lg shadow-md transition-transform hover:scale-105"
            />
          <div className="flex gap-4 mt-6">
            <button
              onClick={()=>addToCart(product)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md"
              >
              Add to Cart
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md">
              Buy Now
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < product.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-2xl font-bold text-green-600">₹{product.price}</p>
          <Link to="/" className="text-blue-600 hover:underline block mt-4">
            ← Back to Products
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}

export default ProductDetail;
