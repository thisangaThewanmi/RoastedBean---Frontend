function  Dashboard() {
    return (

        <div className="w-full h-full max-w-xs bg-[#ffffff] shadow-lg rounded-lg p-4 bg-opacity-85">
            {/* Dashboard Title */}
            <h1 className="text-black text-xl font-bold text-center">Dashboard</h1>
            <hr className="border-gray-300 my-3"/>

            {/* Buttons Container */}
            <div className="flex flex-col items-center space-y-3 w-full ">
                {/* Home Button */}

                <button
                    className="w-[90%] flex items-center space-x-2 py-3 rounded-lg bg-[#8B5E3B] text-white hover:bg-gray-300 transition text-center ">
                    <i className="fas fa-home"></i>
                    <span>Home</span>
                </button>


                {/* Field Button */}
                <button
                    className="w-[90%] flex items-center space-x-2 py-3 rounded-lg bg-[#8B5E3B] text-white hover:bg-gray-300 transition text-center">
                    <i className="fas fa-seedling"></i>
                    <span>Items</span>
                </button>

                {/* Crop Button */}
                <button
                    className="w-[90%] flex items-center space-x-2 py-3 rounded-lg bg-[#8B5E3B] text-white hover:bg-gray-600 transition text-center">
                    <i className="fas fa-leaf"></i>
                    <span>Menues</span>
                </button>

                {/* Log Button */}
                <button
                    className="w-[90%] flex items-center space-x-2 py-3 rounded-lg bg-[#8B5E3B] text-white hover:bg-gray-600 transition text-center">
                    <i className="fas fa-book"></i>
                    <span>Place Order</span>
                </button>

                {/* Vehicle Button */}
                <button
                    className="w-[90%] flex items-center space-x-2 py-3 rounded-lg bg-[#8B5E3B] text-white hover:bg-gray-600 transition text-center">
                    <i className="fas fa-truck"></i>
                    <span>Customers</span>
                </button>

                {/* Equipment Button */}
                <button
                    className="w-[90%] flex items-center space-x-2 py-3 rounded-lg bg-[#8B5E3B] text-white hover:bg-gray-600 transition text-center">
                    <i className="fas fa-tools"></i>
                    <span>Suppliers</span>
                </button>

                {/* Staff Button */}
                <button
                    className="w-[90%] flex items-center space-x-2 py-3 rounded-lg bg-[#8B5E3B] text-white hover:bg-gray-600 transition text-center">
                    <i className="fas fa-users"></i>
                    <span>Staff</span>
                </button>

                {/* Logout Button */}
                <button
                    className="w-[90%] flex items-center space-x-2 py-3 rounded-lg bg-red-500 text-white hover:bg-red-500 transition text-center">
                    <i className="fas fa-sign-out-alt"></i>
                    <span>Logout</span>
                </button>
            </div>
        </div>
    )
}

export default Dashboard