

const Headings = ({mainHeading,subHeading}) => {
    return (
        <div className="flex flex-col justify-center items-center my-8">
            <h1 className="font-bold text-3xl border-y-4 border-black uppercase mb-4">{mainHeading}</h1>
            <p className="font-semibold text-xl italic uppercase">{subHeading}</p>
        </div>
    );
};

export default Headings;