import moment from 'moment';
import React, { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';

const News = ({ news ,handelDelete }) => {
    const { date, img, detail, title,_id } = news
    
    const [showText, setShowText] = useState(true)
   
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
                   <div className='flex justify-between items-center'>
                   <span className="bg-gradient-to-r from-[#004F70] to-[#007C9C] rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-white mb-5">
                        {moment(date).format("MMM Do YY")}
                    </span>
                    <div className=' flex gap-2 items-center justify-center'>
                        <FaEdit 
                       
                        title='edit this news'
                        className='w-6 h-6'></FaEdit>


                        <AiFillDelete
                         onClick={()=>handelDelete(_id)}
                        title='delete this news'
                         className='w-6 h-6'>
                         </AiFillDelete>
                    </div>
                   </div>

                    <h3>
                        <a
                            href=""
                            className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary">
                            {title}
                        </a>
                    </h3>
                   
                        <p className="text-base text-body-color overflow-y-auto scrollbar-hide h-40">
                            {showText ? detail.slice(0, 100) : detail} <p className='font-bold' onClick={() => setShowText(!showText)}> {
                                detail.length>100?<>{showText ? <span>see more...</span> : <span>see less ..</span>}</>:<></>
                            }</p>
                        </p>
                    
                </div>
            </div>
        </div>
    </>
    );
};

export default News;