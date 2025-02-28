import Dashboard from "../assets/navigation/Dashboard.tsx";

function DashboardPage(){

    const totalCustomers = 120;
    const totalItems = 45;
    const totalOrders = 320;
    const popularItems = [
        { id: 1, name: "Espresso", image: "https://via.placeholder.com/150" },
        { id: 2, name: "Latte", image: "https://via.placeholder.com/150" },
        { id: 3, name: "Cappuccino", image: "https://via.placeholder.com/150" },
        { id: 4, name: "Croissant", image: "https://via.placeholder.com/150" },
    ];


    return(
        // <div  className=" min-h-screen w-screen flex  justify-center  h-screen flex full-page-container bg-[url(https://i.pinimg.com/736x/c2/fd/42/c2fd4250aabfe2826e9e7b0cd07a4941.jpg)] bg-repeat bg-auto overflow-hidden ">
        <div className=" min-h-screen w-screen flex  justify-center  h-screen flex full-page-container bg-[url(https://i.pinimg.com/736x/5c/9d/ef/5c9def38bd720d1c4ec9d0721cfcf012.jpg)] bg-repeat bg-auto overflow-hidden ">

            <div className="w-[97%] ml-2 mr-2 mt-2 mb-2 h-[100%] flex flex-row  ">

                <div className=" h-[96%] w-[17%] mt-3 mr-0  items-center justify-center rounded-3xl bg-opacity-85 ">
                    <Dashboard/>
                </div>

                {/* Main Content - Home Page */}
                    <div className="h-[95%] w-[84%] ml-4 bg-white rounded-3xl bg-opacity-85 mt-2 p-8">
                        {/* Header */}
                        <div className="w-[96%] h-[7%] mt-4 mr-3 ml-3 bg-white rounded-2xl border-2 border-amber-950 text-[#5D4037] px-4 py-2 font-semibold">
                            Dashboard / Home
                        </div>

                        {/* Welcome Section */}
                        <div className="mt-8">
                            <h1 className="text-4xl font-bold text-amber-900">Welcome to Café Delight!</h1>
                            <p className="text-lg text-gray-600 mt-2">
                                Your one-stop destination for delicious coffee and pastries.
                            </p>
                        </div>

                        {/* Key Metrics Section */}
                        <div className="grid grid-cols-3 gap-6 mt-8">
                            <div className="bg-amber-100 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                                <h3 className="text-2xl font-bold text-amber-900">{totalCustomers}</h3>
                                <p className="text-gray-600">Total Customers</p>
                            </div>
                            <div className="bg-amber-100 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                                <h3 className="text-2xl font-bold text-amber-900">{totalItems}</h3>
                                <p className="text-gray-600">Total Items</p>
                            </div>
                            <div className="bg-amber-100 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                                <h3 className="text-2xl font-bold text-amber-900">{totalOrders}</h3>
                                <p className="text-gray-600">Total Orders</p>
                            </div>
                        </div>

                        {/* Popular Items Section */}
                        <div className="mt-12">
                            <h2 className="text-2xl font-bold text-amber-900 mb-6">Popular Items</h2>
                            <div className="grid grid-cols-4 gap-6">
                                {popularItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-lg transition-shadow"
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-24 h-24 rounded-full mb-4"
                                        />
                                        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>



                </div>
            </div>

    )
}

export default DashboardPage;