import Dashboard from "../assets/navigation/Dashboard.tsx";

function Order(){

    return (
        <div
            className=" min-h-screen w-screen flex  justify-center  h-screen flex full-page-container bg-[url(https://i.pinimg.com/736x/5c/9d/ef/5c9def38bd720d1c4ec9d0721cfcf012.jpg)] bg-repeat bg-auto overflow-hidden ">

            <div className="w-[97%] ml-2 mr-2 mt-2 mb-2 h-[100%] flex flex-row  ">

                <div className=" h-[96%] w-[17%] mt-3 mr-0  items-center justify-center rounded-3xl bg-opacity-85 ">
                    <Dashboard/>
                </div>

                <div className="h-[95%] w-[84%] ml-4 bg-white rounded-3xl bg-opacity-85 mt-2 ">

                    <div
                        className="w-[96%] h-[7%] mt-4 mr-3 ml-3 bg-white rounded-2xl border-2 border-amber-950 text-[#5D4037] px-4 py-2 font-semibold">
                        Dashboard / PlaceOrder
                    </div>


                </div>
            </div>


        </div>
    )
}

export default Order;