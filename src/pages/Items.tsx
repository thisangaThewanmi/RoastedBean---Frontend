import Dashboard from "../assets/navigation/Dashboard.tsx";
import ProductCard from "../Components/ProductCard.tsx";

import ItemModal from "../Components/ItemModal.tsx";
import {useEffect, useState} from "react";

import {Item} from "../assets/Model/Item.ts";
import { v4 as uuidv4 } from "uuid";
import {useDispatch, useSelector} from "react-redux";
import {fetchItems, saveItem, updateItem} from "../reducers/ItemSlice.tsx";


function Items() {



    const [isOpen, setIsModalOpen] = useState(false);
    const [itemData, setItem] = useState<Item>({id: "", name: "", description: null, price: 0, availability: true, imageUrl: "", category: "", quantity: 0,});

    const {items, loading, error} = useSelector((state) => state.item);
    const [isEditMode, setIsEditMode] = useState(false);


    const openEditModal = (item: Item) => {
        setIsEditMode(true); // Set the modal to "Edit" mode
        setItem(item); // Pre-fill the form with the staff member's data
        setIsModalOpen(true); // Open the modal
    };

    const openModal = () => {
        setIsEditMode(false); // Set the modal to "Add" mode
        setItem({id: "", name: "", description: null, price: 0, availability: true, imageUrl: "", category: "", quantity: 0,});
        setIsModalOpen(true);
        // Reset the form

    };

    const modalTitle = isEditMode ? "Update Staff" : "Add Staff";



    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(fetchItems());
    }, [dispatch])






    // methods

    //Add and Update Items
    const handleAdd = () => {
        if (isEditMode) {
            // Update the staff member
            dispatch(updateItem(itemData));
            setItem({id: "", name: "", description: null, price: 0, availability: true, imageUrl: "", category: "", quantity: 0,});
        } else {
            const itemId = uuidv4();

            // Create a new customer object
            const newItem: Item = new Item(itemId,itemData.name,itemData.description,itemData.price,itemData.availability,itemData.imageUrl,itemData.category,itemData.quantity )

            console.log("newItem" + newItem);
            // Dispatch the saveCustomer thunk
            dispatch(saveItem(newItem));
            console.log(itemData);
            setItem({id: "", name: "", description: null, price: 0, availability: true, imageUrl: "", category: "", quantity: 0,});
        }

    };





    return (
        <div className="min-h-screen w-screen flex justify-center h-screen full-page-container bg-[url(https://i.pinimg.com/736x/5c/9d/ef/5c9def38bd720d1c4ec9d0721cfcf012.jpg)] bg-repeat bg-auto overflow-hidden">
            <div className="w-[97%] ml-2 mr-2 mt-2 mb-2 h-[100%] flex flex-row">
                {/* Dashboard Section */}
                <div className="h-[96%] w-[17%] mt-3 mr-0 items-center justify-center rounded-3xl bg-opacity-85">
                    <Dashboard />
                </div>

                {/* Product Cards Section */}
                <div className="h-[95%] w-[84%] ml-4 bg-white rounded-3xl bg-opacity-85 mt-2">
                    {/* Header Section */}
                    <div
                        className="w-[96%] h-[7%] mt-4 mr-3 ml-3 bg-white rounded-2xl border-2 border-amber-950 text-[#5D4037] px-4 py-2 font-semibold">
                        Dashboard / Manage Staff
                    </div>

                    {/* Search and Add Item Section */}
                    <div className="flex justify-between items-center mb-6 mt-6">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-3/4 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
                        />
                        <button className="px-4 py-2 bg-amber-700 text-white font-bold rounded-lg hover:bg-amber-800"
                                onClick={openModal}>
                            Add Item
                        </button>
                    </div>




                    <div className="h-[75%] overflow-y-auto">
                        <div className="grid grid-cols-6 gap-4">
                            {/* Map over the fetched items and render ProductCard components */}
                            {items.map((item) => {
                                const price = typeof item.price === "number" ? item.price : parseFloat(item.price);
                                const displayPrice = isNaN(price) ? 0 : price; // Explicitly handle NaN
                                return (
                                    <div key={item.id} className="col-span-1">
                                        <ProductCard
                                            image={item.imageUrl}
                                            name={item.name}
                                            price={`$${displayPrice.toFixed(2)}`}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>


            <ItemModal
                isOpen={isOpen}
                onClose={handleModalClose}
                onSave={handleAdd}
                heading={modalTitle}
                item={itemData}
                setItem={setItem}
                isEditMode={isEditMode} // Pass the mode to the modal
            />
        </div>

    );
}

export default Items;