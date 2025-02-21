import Dashboard from "../assets/navigation/Dashboard.tsx";

function Items(){

        return (
            // <div className="min-h-screen w-screen flex justify-center bg-[url(https://i.pinimg.com/736x/c2/fd/42/c2fd4250aabfe2826e9e7b0cd07a4941.jpg)] bg-repeat bg-auto overflow-hidden">

            <div
                className=" min-h-screen w-screen flex  justify-center  h-screen flex full-page-container bg-[url(https://i.pinimg.com/736x/5c/9d/ef/5c9def38bd720d1c4ec9d0721cfcf012.jpg)] bg-repeat bg-auto overflow-hidden ">


                <div className="w-[97%] ml-2 mr-2 mt-2 mb-2 h-[100%] flex flex-row overflow-scroll">

                    {/* Sidebar */}
                    <div
                        className="h-[96%] w-[17%] mt-3 mr-0 items-center justify-center rounded-3xl bg-gray-800 bg-opacity-85">
                        <Dashboard/>
                    </div>

                    {/* Main Content */}
                    <div className="h-[95%] w-[84%] ml-4 bg-white rounded-3xl bg-opacity-85 mt-2 p-5 shadow-lg">

                        {/* Header */}
                        <div
                            className="w-[96%] h-[7%] mt-4 mr-3 ml-3 bg-white rounded-2xl border-2 border-amber-950 text-[#5D4037] px-4 py-2 font-semibold">
                            Dashboard / Products
                        </div>

                        {/* Beverages Section */}
                        <div className="mt-6">
                            <h2 className="text-2xl font-bold text-amber-800 mb-4">Beverages</h2>
                            <div className="grid grid-cols-5 gap-6">
                                <ProductCard image="https://via.placeholder.com/150" name="Coffee" price="$4.99"/>
                                <ProductCard image="https://via.placeholder.com/150" name="Tea" price="$3.99"/>
                                <ProductCard image="https://via.placeholder.com/150" name="Smoothie" price="$5.99"/>
                            </div>
                        </div>

                        {/* Bakery Items Section */}
                        <div className="mt-10">
                            <h2 className="text-2xl font-bold text-amber-800 mb-4">Bakery Items</h2>
                            <div className="grid grid-cols-3 gap-6">
                                <ProductCard image="https://via.placeholder.com/150" name="Croissant" price="$2.99"/>
                                <ProductCard image="https://via.placeholder.com/150" name="Bagel" price="$1.99"/>
                                <ProductCard image="https://via.placeholder.com/150" name="Muffin" price="$3.49"/>
                            </div>
                        </div>

                        {/* Cakes Section */}
                        <div className="mt-10">
                            <h2 className="text-2xl font-bold text-amber-800 mb-4">Cakes</h2>
                            <div className="grid grid-cols-3 gap-6">
                                <ProductCard image="https://via.placeholder.com/150" name="Chocolate Cake"
                                             price="$12.99"/>
                                <ProductCard image="https://via.placeholder.com/150" name="Cheesecake" price="$9.99"/>
                                <ProductCard image="https://via.placeholder.com/150" name="Red Velvet" price="$11.99"/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
}

// Reusable Product Card Component
function ProductCard({image, name, price}) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 text-center">
            <img src={image} alt={name} className="w-full h-40 object-cover rounded-md" />
                <h2 className="text-lg font-semibold mt-2">{name}</h2>
                <p className="text-amber-700 font-bold mt-2">{price}</p>
            </div>
        );
    }


export default Items