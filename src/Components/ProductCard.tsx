

const ProductCard = ({ image, name, price }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            {/* Product Image */}
            <img
                src={image}
                alt={name}
                className="w-full h-32 object-cover"
            />

            {/* Product Details */}
            <div className="p-3">
                <h3 className="text-sm font-semibold text-gray-800 truncate">{name}</h3>
                <p className="text-sm text-gray-600 mt-1">{price}</p>
            </div>

            {/* Add to Cart Button (Optional) */}
            <button className="w-full bg-amber-700 text-white text-sm font-semibold py-2 hover:bg-amber-800 transition-colors duration-300">
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;