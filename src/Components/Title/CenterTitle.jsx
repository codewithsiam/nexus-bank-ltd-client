

const CenterTitle = ({subHeading, heading}) => {
    return (
        <div className="text-center">
            <div className='flex gap-2 items-center justify-center'>
                <div className="nav-btn w-5 md:h-[3px] h-[2px]"></div>
                <h4 className="text-color font-bold md:text-lg lg:text-xl uppercase">{subHeading}</h4>
            </div>
            <h1 className="text-3xl lg:text-5xl my-2 lg:mt-3 lg:mb-5 text-blue-950 font-semibold">{heading}</h1>
        </div>
        
        // <CenterTitle heading={"yy"}></CenterTitle>
    );
};

export default CenterTitle;