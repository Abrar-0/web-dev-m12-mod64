

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="text-center md:w-1/3 mx-auto">
            <p className="text-yellow-500 py-4 italic">---{subHeading}---</p>
            <h3 className="text-4xl uppercase border-y-2 p-4 mb-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;
