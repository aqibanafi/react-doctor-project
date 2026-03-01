import { OctagonAlert } from 'lucide-react';
const AppointmentBooking = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            {/* Title Section */}
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
                Book an Appointment
            </h2>

            {/* Dotted Divider */}
            <div className="border-t border-dashed border-gray-300 mb-6"></div>

            {/* Availability Section */}
            <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-bold text-gray-800">Availability</span>
                <span className="bg-green-50 text-green-600 px-4 py-1.5 rounded-full border border-green-200 text-sm font-medium">
                    Doctor Available Today
                </span>
            </div>

            {/* Gray Line */}
            <div className="border-t border-gray-100 mb-6"></div>

            {/* Alert Message Box */}
            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 flex items-start gap-3 mb-10">
                <div className="mt-0.5">
                    <OctagonAlert />
                </div>
                <p className="text-orange-500 text-[15px] font-medium leading-relaxed">
                    Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
                </p>
            </div>

            {/* Action Button */}
            <button className="w-full bg-[#1d69e3] hover:bg-blue-700 text-white font-semibold py-4 rounded-full text-lg transition-colors shadow-md">
                Book Appointment Now
            </button>
        </div>
    );
};

export default AppointmentBooking;