
const SectionTitle = ({title, description}) => {
    return (
        <div>
            <h2 className='text-4xl font-medium text-center mb-3'>{title}</h2>
            <p className='text-center'>{description}</p>
        </div>
    );
};

export default SectionTitle;