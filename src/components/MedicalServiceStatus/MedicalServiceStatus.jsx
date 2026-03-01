import React from 'react';

const MedicalServiceStatus = () => {
    return (
        <div className="flex flex-col items-center justify-center p-6 bg-white w-fit border">
            {/* Icon Section */}
            <div className="mb-4">
                {/* আপনার কাছে ইমেজ ফাইল থাকলে <img src="/path-to-icon.png" /> ব্যবহার করুন */}
                <img
                    src="https://cdn-icons-png.flaticon.com/512/3304/3304567.png"
                    alt="Doctor Icon"
                    className="w-24 h-24 object-contain"
                />
            </div>

            {/* Number Section */}
            <h1 className="text-6xl font-black text-[#111111] tracking-tight">
                199+
            </h1>

            {/* Label Section */}
            <p className="text-2xl font-medium text-gray-500 mt-2">
                Total Doctors
            </p>
        </div>
    );
};

export default MedicalServiceStatus;