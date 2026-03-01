

const AppointmentCard = () => {
    return (
        <div className="bg-gray-100 p-6 flex justify-center">
            <div className="bg-white w-full max-w-5xl rounded-2xl p-6 shadow-sm">

                {/* Top Section */}
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">
                            Dr. Cameron Williamson
                        </h2>
                        <p className="text-gray-500 mt-1">
                            MBBS, MD - General Medicine, DNB
                        </p>
                    </div>

                    <div className="text-gray-500 text-sm">
                        Appointment Fee : 950 Taka + Vat
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-dashed border-gray-300 my-4"></div>

                {/* Cancel Button */}
                <button className="w-full py-3 rounded-full border border-red-500 text-red-600 font-medium hover:bg-red-50 transition">
                    Cancel Appointment
                </button>
            </div>
        </div>
    );
};

export default AppointmentCard;