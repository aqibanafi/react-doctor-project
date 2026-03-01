

const Hero = () => {
    return (
        <div>
            <div>
                <div>
                    <h1 className='text-6xl font-semibold text-center mb-5'>Dependable Care, Backed by Trusted Professionals.</h1>
                </div>
                <div className='mb-5'>
                    <p className='text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                </div>
                <div className='flex px-48 gap-5'>
                    <input type="text" placeholder="Search any doctor" className="input flex-2 rounded-full" />
                    <button className="btn btn-primary rounded-full">Search Now</button>
                </div>
            </div>
            <div>
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
        </div>
    );
};

export default Hero;