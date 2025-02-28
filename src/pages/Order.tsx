import { useState } from "react";
import Dashboard from "../assets/navigation/Dashboard.tsx";

function PlaceOrder() {
    // Sample menu items
    const menuItems = [
        { id: 1, name: "Espresso", price: 3.99, image: "https://via.placeholder.com/150" },
        { id: 2, name: "Latte", price: 4.99, image: "https://via.placeholder.com/150" },
        { id: 3, name: "Cappuccino", price: 4.49, image: "https://via.placeholder.com/150" },
        { id: 4, name: "Croissant", price: 2.99, image: "https://via.placeholder.com/150" },
        { id: 5, name: "Bagel", price: 1.99, image: "https://via.placeholder.com/150" },
        { id: 6, name: "Muffin", price: 3.49, image: "https://via.placeholder.com/150" },
    ];

    // State to manage cart items
    const [cart, setCart] = useState([]);

    // Function to add item to cart
    const addToCart = (item) => {
        const existingItem = cart.find((cartItem) => cartItem.id === item.id);
        // if (existingItem) {
        //     setCart(
        //         cart.map((cartItem) =>
        //             cartItem.id === item.id
        //                 ? { ...cartItem, quantity: cartItem.quantity + 1 }
        //                 : cartItem
        //         )
        //     );
        // } else {
        //     setCart([...cart, { ...item, quantity: 1 }]);
        // }
    };

    // Function to remove item from cart
    const removeFromCart = (item) => {
        // const existingItem = cart.find((cartItem) => cartItem.id === item.id);
        // if (existingItem.quantity === 1) {
        //     setCart(cart.filter((cartItem) => cartItem.id !== item.id));
        // } else {
        //     setCart(
        //         cart.map((cartItem) =>
        //             cartItem.id === item.id
        //                 ? { ...cartItem, quantity: cartItem.quantity - 1 }
        //                 : cartItem
        //         )
        //     );
        // }
    };

    // Calculate total price
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

    return (
        <div className="min-h-screen w-screen flex justify-center h-screen full-page-container bg-[url(https://i.pinimg.com/736x/5c/9d/ef/5c9def38bd720d1c4ec9d0721cfcf012.jpg)] bg-repeat bg-auto overflow-hidden">
            <div className="w-[97%] ml-2 mr-2 mt-2 mb-2 h-[100%] flex flex-row">
                {/* Dashboard Section */}
                <div className="h-[96%] w-[17%] mt-3 mr-0 items-center justify-center rounded-3xl bg-opacity-85">
                    <Dashboard />
                </div>

                {/* Main Content - Place Order UI */}
                <div className="h-[95%] w-[84%] ml-4 bg-white rounded-3xl bg-opacity-85 mt-2 p-6">
                    {/* Header */}
                    <div className="w-[96%] h-[7%] mt-4 mr-3 ml-3 bg-white rounded-2xl border-2 border-amber-950 text-[#5D4037] px-4 py-2 font-semibold">
                        Dashboard / Place Order
                    </div>

                    {/* Menu and Cart Section */}
                    <div className="flex h-[85%] mt-6">
                        {/* Menu Section */}
                        <div className="w-[60%] pr-6 overflow-y-auto">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Menu</h2>
                            <div className="grid grid-cols-3 gap-4">
                                {menuItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center cursor-pointer hover:shadow-lg transition-shadow"
                                        onClick={() => addToCart(item)}
                                    >
                                        <img src={item.image} alt={item.name} className="w-24 h-24 rounded-full mb-2" />
                                        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                                        <p className="text-gray-600">${item.price.toFixed(2)}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Cart Section */}
                        <div className="w-[40%] bg-gray-50 rounded-lg p-6 flex flex-col">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h2>
                            <div className="flex-1 overflow-y-auto">
                                {cart.length === 0 ? (
                                    <p className="text-gray-600 text-center">Your cart is empty.</p>
                                ) : (
                                    cart.map((item) => (
                                        <div key={item.id} className="bg-white rounded-lg shadow-md p-4 mb-4 flex justify-between items-center">
                                            <div className="flex items-center">
                                                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full mr-4" />
                                                <div>
                                                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                                                    <p className="text-gray-600">${item.price.toFixed(2)} x {item.quantity}</p>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item)}
                                                className="text-red-500 hover:text-red-700 font-bold"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ))
                                )}
                            </div>

                            {/* Summary Section */}
                            <div className="mt-6 pt-4 border-t border-gray-200">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-bold text-gray-800">Total</h3>
                                    <p className="text-xl font-bold text-gray-800">${totalPrice}</p>
                                </div>
                                <button
                                    className="w-full bg-amber-700 text-white font-bold py-3 rounded-lg hover:bg-amber-800 transition-colors"
                                    disabled={cart.length === 0}
                                >
                                    Place Order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlaceOrder;