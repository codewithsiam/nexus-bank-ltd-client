
import moment from 'moment/moment';
import React, { useState } from 'react';
import { RemoveScrollBar } from 'react-remove-scroll-bar';

const BlogNews = ({ news }) => {
    const { date, img, detail, title } = news
    const [showText, setShowText] = useState(true)
    console.log(title)
    return (
        <>
            <div className=" px-4 cursor-pointer">
                <div className="max-w-[370px] mx-auto mb-10">
                    <div className="rounded overflow-hidden  mb-8">
                        <img
                            src={img}
                            alt="image"
                            className="w-full h-52"
                        />
                    </div>
                    <div>
                        <span className="bg-gradient-to-r from-[#004F70] to-[#007C9C] rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-white mb-5">
                            {moment(date).format("MMM Do YY")}
                        </span>
                        <h3>
                            <a
                                href=""
                                className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary">
                                {title}
                            </a>
                        </h3>
                       
                            <p className="text-base text-body-color overflow-y-auto scrollbar-hide h-40">
                                {showText ? detail.slice(0, 150) : detail} <p className='font-bold' onClick={() => setShowText(!showText)}>{showText ? <span>see more...</span> : <span>see less ..</span>}</p>
                            </p>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogNews;