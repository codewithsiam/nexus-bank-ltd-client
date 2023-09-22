

const TitleGroup = ({subHeading, heading}) => {
    return (
        <div>
            <div className='flex gap-2 items-center'>
                <div className="my-btn w-5 md:h-[3px] h-[2px]"></div>
                <h4 className="text-color font-bold text-[14px] md:text-lg lg:text-xl uppercase">{subHeading}</h4>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl my-2 lg:mt-3 lg:mb-5 text-blue-950 font-semibold">{heading}</h1>
        </div>
        
        // <TitleGroup heading={"yy"}></TitleGroup>
    );
};

export default TitleGroup;