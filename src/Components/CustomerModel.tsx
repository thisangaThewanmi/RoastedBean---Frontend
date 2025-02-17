
interface ICustomerModal {
    isOpen: boolean;
    onClose: () => void;
    onSave: (customer: any) => void;
    heading:string;
}

function CustomerModel({isOpen,onClose,onSave,heading}:ICustomerModal){



    if (!isOpen) return null;

    return (

        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <div className="flex items-center justify-center mb-6">
                    <img src="/path/to/customer-icon.svg" alt="Customer Icon" className="w-12 h-12 mr-3"/>
                    <h2 className="text-xl font-bold text-center">{heading}</h2>
                </div>
                <p className="mb-4 text-center text-gray-600">Enter customer details below</p>

                <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 mb-2">Full
                                Name</label>
                            <input
                                id="full-name"
                                type="text"
                                placeholder="Enter full name"
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                            />
                        </div>

                        <div>
                            <label htmlFor="email"
                                   className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter email address"
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone
                                Number</label>
                            <input
                                id="phone"
                                type="tel"
                                placeholder="Enter phone number"
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                            />
                        </div>

                        <div>
                            <label htmlFor="address"
                                   className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                            <input
                                id="address"
                                type="text"
                                placeholder="Enter address"
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                            />
                        </div>

                        <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">City</label>
                            <input
                                id="city"
                                type="text"
                                placeholder="Enter city"
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                            />
                        </div>

                        <div>
                            <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700 mb-2">Postal
                                Code</label>
                            <input
                                id="postal-code"
                                type="text"
                                placeholder="Enter postal code"
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                            />
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
                        onClick={onSave}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}



export default CustomerModel;