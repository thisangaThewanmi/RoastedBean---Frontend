import Dashboard from "../assets/navigation/Dashboard.tsx";
import {useEffect, useState} from "react";
import StaffModal from "../Components/StaffModal.tsx";
import {fetchStaff, saveStaff} from "../reducers/StaffSlice.tsx";
import { useDispatch } from 'react-redux';
import {Staff} from "../assets/Model/Staff.ts";
import { v4 as uuidv4 } from "uuid";


function StaffPage() {

    const [isOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("Add Staff");// Default title
    const [staffMem, setStaff] = useState({ staffId:"" , name: "", email: "", phone:"",address:"",status:""});

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchStaff());
    }, [dispatch])



    const openModal = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };


    const handleAdd = () => {
        const staffId = uuidv4();

        // Create a new customer object
        const newStaff: Staff = new Staff(staffId,staffMem.name,staffMem.email,staffMem.phone,staffMem.address,staffMem.status)

        console.log("newStaff"+newStaff);
        // Dispatch the saveCustomer thunk
        dispatch(saveStaff(newStaff));
        console.log(staffMem);
        setStaff({ staffId:"" , name: "", email: "", phone:"",address:"",status:""});

    };






    return (

        // <div  className=" min-h-screen w-screen flex  justify-center  h-screen flex full-page-container bg-[url(https://i.pinimg.com/736x/c2/fd/42/c2fd4250aabfe2826e9e7b0cd07a4941.jpg)] bg-repeat bg-auto overflow-hidden ">
        <div className=" min-h-screen w-screen flex  justify-center  h-screen flex full-page-container bg-[url(https://i.pinimg.com/736x/5c/9d/ef/5c9def38bd720d1c4ec9d0721cfcf012.jpg)] bg-repeat bg-auto overflow-hidden ">

            <div className="w-[97%] ml-2 mr-2 mt-2 mb-2 h-[100%] flex flex-row  ">

                <div className=" h-[96%] w-[17%] mt-3 mr-0  items-center justify-center rounded-3xl bg-opacity-85 ">
                    <Dashboard/>
                </div>

                <div className="h-[95%] w-[84%] ml-4 bg-white rounded-3xl bg-opacity-85 mt-2 ">

                    <div
                        className="w-[96%] h-[7%] mt-4 mr-3 ml-3 bg-white rounded-2xl border-2 border-amber-950 text-[#5D4037] px-4 py-2 font-semibold">
                        Dashboard / Manage Staff
                    </div>


                    {/* Search Section (Inside a White Box) */}
                    <div className="bg-white shadow-md rounded-lg p-4 mt-6 flex justify-between items-center">

                        {/* Search Input Field */}
                        <div className="flex items-center space-x-2 w-[70%]">
                            <input
                                type="text"
                                placeholder="Search Customers..."
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                            />
                            <button
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                                Search
                            </button>
                        </div>

                        {/* Add Customer Button */}
                        <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition"  onClick={openModal}>
                            + Add Customer
                        </button>
                    </div>

                    {/* Table Container */}
                    <div className="mt-6 overflow-x-auto bg-white shadow-md rounded-lg p-4">

                        <h1> Staff Nembers</h1>
                        <table className="w-full border-collapse">
                            {/* Table Header */}
                            <thead>
                            <tr className="bg-white text-[##5D4037] uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">ID</th>
                                <th className="py-3 px-6 text-left">Name</th>
                                <th className="py-3 px-6 text-left">Email</th>
                                <th className="py-3 px-6 text-left">Phone</th>
                                <th className="py-3 px-6 text-left">Address</th>
                                <th className="py-3 px-6 text-left">Status</th>
                                <th className="py-3 px-6 text-left">Actions</th>
                            </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody className="text-gray-700 text-sm">
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">001</td>
                                <td className="py-3 px-6">John Doe</td>
                                <td className="py-3 px-6">john@example.com</td>
                                <td className="py-3 px-6">+123 456 7890</td>
                                <td className="py-3 px-6">123 Main St, City</td>
                                <td className="py-3 px-6">
                                    <span
                                        className="bg-green-200 text-green-700 py-1 px-3 rounded-full text-xs">Active</span>
                                </td>
                                <td className="py-3 px-6">
                                    <button
                                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-xs" onClick={() => openEditModal()}>Edit
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-3 py-1 ml-2 rounded hover:bg-red-600 text-xs">Delete
                                    </button>
                                </td>
                            </tr>

                           {/* <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">002</td>
                                <td className="py-3 px-6">Jane Smith</td>
                                <td className="py-3 px-6">jane@example.com</td>
                                <td className="py-3 px-6">+987 654 3210</td>
                                <td className="py-3 px-6">456 Elm St, Town</td>
                                <td className="py-3 px-6">
                                    <span
                                        className="bg-yellow-200 text-yellow-700 py-1 px-3 rounded-full text-xs">Pending</span>
                                </td>
                                <td className="py-3 px-6">
                                    <button
                                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-xs" onClick={() => openEditModal(customer)}>Edit
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-3 py-1 ml-2 rounded hover:bg-red-600 text-xs">Delete
                                    </button>
                                </td>
                            </tr>

                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">003</td>
                                <td className="py-3 px-6">Alice Johnson</td>
                                <td className="py-3 px-6">alice@example.com</td>
                                <td className="py-3 px-6">+321 654 9870</td>
                                <td className="py-3 px-6">789 Oak St, Village</td>
                                <td className="py-3 px-6">
                                    <span
                                        className="bg-red-200 text-red-700 py-1 px-3 rounded-full text-xs">Inactive</span>
                                </td>
                                <td className="py-3 px-6">
                                    <button
                                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-xs" onClick={() => console.log("edit clicked")}>Edit
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-3 py-1 ml-2 rounded hover:bg-red-600 text-xs">Delete
                                    </button>
                                </td>
                            </tr>*/}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

            <StaffModal isOpen={isOpen} onClose={handleModalClose} onSave={handleAdd} heading={modalTitle} staff={staffMem}
                        setStaff={setStaff}></StaffModal>


        </div>
    )


}

export default StaffPage