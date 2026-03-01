import doctorImg from "../../assets/doctor02.png";
const DoctorProfileCard = () => {
    return (
        <div>
            <div className="bg-white max-w-5xl w-full rounded-3xl p-8 flex flex-col md:flex-row gap-10">

                {/* Left Image */}
                <div className="md:w-1/3">
                    <div className="rounded-2xl overflow-hidden h-full">
                        <img
                            src={doctorImg}
                            alt="Doctor"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Right Content */}
                <div className="md:w-2/3">

                    {/* Name */}
                    <h2 className="text-3xl font-bold text-gray-900">
                        Dr. Cameron Williamson
                    </h2>

                    {/* Degree */}
                    <div className="mt-3 text-gray-600 space-y-1">
                        <p>MBBS, MD</p>
                        <p>General Medicine, DNB</p>
                    </div>

                    {/* Working At */}
                    <div className="mt-6">
                        <p className="text-gray-500">Working at</p>
                        <p className="font-semibold text-gray-900 mt-1">
                            TMSS Medical College & Rafatullah Community Hospital, Bogura
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-dashed border-gray-300 my-6"></div>

                    {/* Reg No */}
                    <div className="flex items-center gap-3 text-gray-600">
                        <span className="border border-gray-400 rounded-full w-6 h-6 flex items-center justify-center text-sm">
                            R
                        </span>
                        <span>Reg No: BD 12451254</span>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-dashed border-gray-300 my-6"></div>

                    {/* Availability */}
                    <div className="mt-6 flex flex-wrap items-center gap-4">
                        <span className="font-medium text-gray-700">Availability</span>

                        <div className="flex gap-3">
                            <span className="px-4 py-1 rounded-full bg-orange-100 text-orange-500 text-sm font-medium">
                                Sunday
                            </span>
                            <span className="px-4 py-1 rounded-full bg-orange-100 text-orange-500 text-sm font-medium">
                                Monday
                            </span>
                            <span className="px-4 py-1 rounded-full bg-orange-100 text-orange-500 text-sm font-medium">
                                Thursday
                            </span>
                        </div>
                    </div>

                    {/* Consultation Fee */}
                    <div className="mt-6 text-gray-700">
                        <span className="font-medium">Consultation Fee: </span>
                        <span className="text-blue-600 font-semibold">
                            Taka : 273
                        </span>
                        <span className="text-gray-500"> (incl. Vat) </span>
                        <span className="text-blue-600 cursor-pointer hover:underline">
                            Per consultation
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DoctorProfileCard;