

import {Item} from "../assets/Model/Item.ts";

interface ItemModal {
    isOpen: boolean;
    onClose: () => void;
    onSave: (item: Item) => void;
    heading:string;
    item: Item;
    setItem: (item: Item) => void;

}

function ItemModal({isOpen,onClose,onSave,heading,item, setItem}:ItemModal){

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <div className="flex items-center justify-center mb-6">
                    <img src="/path/to/item-icon.svg" alt="Item Icon" className="w-12 h-12 mr-3" />
                    <h2 className="text-xl font-bold text-center">{heading}</h2>
                </div>
                <p className="mb-4 text-center text-gray-600">Enter item details below</p>

                <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter item name"
                                value={item.name}
                                onChange={(e) => setItem({ ...item, name: e.target.value })}
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                            />
                        </div>

                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                                Description
                            </label>
                            <input
                                id="description"
                                type="text"
                                placeholder="Enter item description"
                                value={item.description || ""}
                                onChange={(e) => setItem({ ...item, description: e.target.value })}
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                            />
                        </div>

                        <div>
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                                Price
                            </label>
                            <input
                                id="price"
                                type="number"
                                placeholder="Enter item price"
                                value={item.price}
                                onChange={(e) => setItem({ ...item, price: parseFloat(e.target.value) })}
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                            />
                        </div>

                        <div>
                            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-2">
                                Image URL
                            </label>
                            <input
                                id="imageUrl"
                                type="text"
                                placeholder="Enter image URL"
                                value={item.imageUrl}
                                onChange={(e) => setItem({ ...item, imageUrl: e.target.value })}
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                            />
                        </div>

                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                                Category
                            </label>
                            <input
                                id="category"
                                type="text"
                                placeholder="Enter item category"
                                value={item.category}
                                onChange={(e) => setItem({ ...item, category: e.target.value })}
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                            />
                        </div>

                        <div>
                            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                                Quantity
                            </label>
                            <input
                                id="quantity"
                                type="number"
                                placeholder="Enter item quantity"
                                value={item.quantity}
                                onChange={(e) => setItem({ ...item, quantity: parseInt(e.target.value) })}
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                            />
                        </div>

                        <div>
                            <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                                Availability
                            </label>
                            <select
                                id="availability"
                                value={item.availability ? "true" : "false"}
                                onChange={(e) => setItem({ ...item, availability: e.target.value === "true" })}
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                            >
                                <option value="true">Available</option>
                                <option value="false">Unavailable</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end space-x-4 mt-6">
                    <button
                        className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
                        onClick={onClose}
                    >
                        Close
                    </button>

                    <button
                        className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition"
                        onClick={() => onSave(item)}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ItemModal;





