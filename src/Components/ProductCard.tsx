

const ProductCard = ({ image, name, price ,onEdit,onDelete}) => {
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
            {/* Buttons for Edit and Delete */}
            <div className="flex justify-between p-3">
                <button
                    className="flex-1 bg-amber-700 text-white text-sm font-semibold py-2 hover:bg-amber-800 transition-colors duration-300 mr-2"
                    onClick={onEdit} // Call the onEdit method passed from the parent
                >
                    Edit
                </button>
                <button
                    className="flex-1 bg-red-600 text-white text-sm font-semibold py-2 hover:bg-red-700 transition-colors duration-300 ml-2 "
                    onClick={onDelete} // Call the onDelete method passed from the parent
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ProductCard;