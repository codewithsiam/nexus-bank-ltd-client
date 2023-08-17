

const FirstTitle = ({heading}) => {
    return (
        <div className='flex gap-2'>
            <div className="nav-btn w-5 h-1"></div>
            <h4 className="text-color font-bold md:text-xl lg:text-3xl">{heading}</h4>
        </div>
        
        // <FirstTitle 
            // heading={"yy"}
        // ></FirstTitle>
    );
};

export default FirstTitle;