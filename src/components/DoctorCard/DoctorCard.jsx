import doctorImg from '../../assets/doctor02.png'
const DoctorCard = () => {
  return (
    <div>
      <div className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-sm">

        {/* Doctor Image */}
        <div className="rounded-2xl overflow-hidden">
          <img
            src={doctorImg}
            alt="Doctor"
            className="w-full h-64 object-cover"
          />
        </div>

        {/* Badges */}
        <div className="flex gap-3 mt-4">
          <span className="px-4 py-1 rounded-full bg-green-100 text-green-600 text-sm font-medium">
            Available
          </span>

          <span className="px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
            5+ Years Experience
          </span>
        </div>

        {/* Name */}
        <h2 className="text-2xl font-bold text-gray-900 mt-4">
          Dr. Cameron Williamson
        </h2>

        {/* Qualification */}
        <p className="text-gray-500 mt-1">
          MBBS, MD - General Medicine, DNB
        </p>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-300 my-4"></div>

        {/* Registration */}
        <div className="flex items-center gap-2 text-gray-600">
          <span className="border border-gray-400 rounded-full w-6 h-6 flex items-center justify-center text-md">
            R
          </span>
          <span>Reg No: BD 12451254</span>
        </div>

        {/* Button */}
        <button className="w-full mt-6 border border-blue-500 text-blue-600 py-3 rounded-full text-lg font-semibold hover:bg-blue-50 transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;