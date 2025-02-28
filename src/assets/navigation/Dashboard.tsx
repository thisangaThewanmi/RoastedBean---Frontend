import {Link} from "react-router";

function  Dashboard() {
    return (

        <div className="w-full h-full max-w-xs bg-[#ffffff] shadow-lg rounded-lg p-4 bg-opacity-85">
            {/* Dashboard Title */}
            <h1 className="text-black text-xl font-bold text-center">Dashboard</h1>
            <hr className="border-gray-300 my-3"/>

            {/* Buttons Container */}
            <div className="flex flex-col items-center space-y-3 w-full ">

                <div className="flex justify-center mb-4">
                    <img
                        src="./assets/logo.png" // Replace with your image URL
                        alt="Café Logo"
                        className="w-50 h-40  border-2 border-amber-700"
                    />
                </div>


                {/* Home Button */}
                <button
                    className="w-[90%] flex items-center space-x-2 py-3 rounded-lg bg-[#8B5E3B] text-white hover:bg-gray-300 transition text-center">
                    <Link to="/" className="w-full h-full flex items-center justify-center">
                        <i className="fas fa-home"></i>
                        <span>Home</span>
                    </Link>
                </button>


                <button
                    className="w-[90%] flex items-center space-x-2 py-3 rounded-lg bg-[#8B5E3B] text-white hover:bg-gray-300 transition text-center">
                    <Link to="/staff" className="w-full h-full flex items-center justify-center">
                        <i className="fas fa-home"></i>
                        <span>Staff</span>
                    </Link>
                </button>


                <button
                    className="w-[90%] flex items-center space-x-2 py-3 rounded-lg bg-[#8B5E3B] text-white hover:bg-gray-300 transition text-center">
                    <Link to="/item" className="w-full h-full flex items-center justify-center">
                        <i className="fas fa-home"></i>
                        <span>Items</span>
                    </Link>
                </button>


                <button
                    className="w-[90%] flex items-center space-x-2 py-3 rounded-lg bg-[#8B5E3B] text-white hover:bg-gray-300 transition text-center">
                    <Link to="/order" className="w-full h-full flex items-center justify-center">
                        <i className="fas fa-home"></i>
                        <span>Order</span>
                    </Link>
                </button>


                <button
                    className="w-[90%] flex items-center space-x-2 py-3 rounded-lg bg-[#8B5E3B] text-white hover:bg-gray-300 transition text-center">
                    <Link to="/none" className="w-full h-full flex items-center justify-center">
                        <i className="fas fa-home"></i>
                        <span>None</span>
                    </Link>
                </button>

                {/* Logout Button */}
                <button
                    className="w-[90%] flex items-center space-x-2 py-3 rounded-lg bg-red-500 text-white hover:bg-red-500 transition text-center">
                    <Link to="/logout" className="w-full h-full flex items-center justify-center">
                        <i className="fas fa-sign-out-alt"></i>
                        <span>Logout</span>
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Dashboard