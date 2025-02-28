import Dashboard from "../assets/navigation/Dashboard.tsx";
import ProductCard from "../Components/ProductCard.tsx";

function Items() {
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
                    <div className="w-[96%] h-[7%] mt-4 mr-3 ml-3 bg-white rounded-2xl border-2 border-amber-950 text-[#5D4037] px-4 py-2 font-semibold">
                        Dashboard / Manage Staff
                    </div>

                    {/* Search and Add Item Section */}
                    <div className="flex justify-between items-center mb-6 mt-6">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-3/4 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
                        />
                        <button className="px-4 py-2 bg-amber-700 text-white font-bold rounded-lg hover:bg-amber-800">
                            Add Item
                        </button>
                    </div>

                    {/* Scrollable Product Cards Container */}
                    <div className="h-[75%] overflow-y-auto">
                        <div className="grid grid-cols-6 gap-4">
                            {/* Row 1 */}
                            <div className="col-span-1">
                                <ProductCard image="https://via.placeholder.com/150" name="Espresso" price="$3.99" />
                            </div>
                            <div className="col-span-1">
                                <ProductCard image="https://via.placeholder.com/150" name="Latte" price="$4.99" />
                            </div>
                            <div className="col-span-1">
                                <ProductCard image="https://via.placeholder.com/150" name="Cappuccino" price="$4.49" />
                            </div>
                            <div className="col-span-1">
                                <ProductCard image="https://via.placeholder.com/150" name="Croissant" price="$2.99" />
                            </div>
                            <div className="col-span-1">
                                <ProductCard image="https://via.placeholder.com/150" name="Bagel" price="$1.99" />
                            </div>
                            <div className="col-span-1">
                                <ProductCard image="https://via.placeholder.com/150" name="Muffin" price="$3.49" />
                            </div>

                            {/* Row 2 */}
                            <div className="col-span-1">
                                <ProductCard image="https://via.placeholder.com/150" name="Chocolate Cake" price="$12.99" />
                            </div>
                            <div className="col-span-1">
                                <ProductCard image="https://via.placeholder.com/150" name="Cheesecake" price="$9.99" />
                            </div>
                            <div className="col-span-1">
                                <ProductCard image="https://via.placeholder.com/150" name="Red Velvet" price="$11.99" />
                            </div>
                            <div className="col-span-1">
                                <ProductCard image="https://via.placeholder.com/150" name="Macaron" price="$1.99" />
                            </div>
                            <div className="col-span-1">
                                <ProductCard image="https://via.placeholder.com/150" name="Donut" price="$2.49" />
                            </div>
                            <div className="col-span-1">
                                <ProductCard image="https://via.placeholder.com/150" name="Brownie" price="$3.99" />
                            </div>

                            {/* Row 3 */}
                            <div className="col-span-1">
                                <ProductCard image="https://via.placeholder.com/150" name="Iced Coffee" price="$4.99" />
                            </div>
                            <div className="col-span-1">
                                <ProductCard image="https://via.placeholder.com/150" name="Cold Brew" price="$5.49" />
                            </div>
                            <div className="col-span-1">
                                <ProductCard image="https://via.placeholder.com/150" name="Matcha Latte" price="$5.99" />
                            </div>
                            <div className="col-span-1">
                                <ProductCard image="https://via.placeholder.com/150" name="Chai Latte" price="$4.99" />
                            </div>
                            <div className="col-span-1">
                                <ProductCard image="https://via.placeholder.com/150" name="Hot Chocolate" price="$3.99" />
                            </div>
                            <div className="col-span-1">
                                <ProductCard image="https://via.placeholder.com/150" name="Tea" price="$2.99" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Items;