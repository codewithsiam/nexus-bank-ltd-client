import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { baseUrl } from '../../config/server';
import { useParams } from 'react-router';
import Footer from '../Shared/Footer/Footer';

const BlogDetail = () => {
    const [newsData, setNewsData] = useState({})
    const { id } = useParams()
    useEffect(() => {
        fetch(`${baseUrl}/news/${id}`)
            .then(res => res.json())
            .then(data => {

                setNewsData(data)
            })
    }, [])
    console.log(id)
    return (
        <div className='w-full bg-slate-100  '>
            <div className='py-8  mx-20 '>
            <h3 className="text-center md:mx-auto mt-2 md:w-full font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark ">
                    {newsData.title}

                </h3>
                <img className='mx-auto w-full h-64 rounded-md'src={newsData.img} alt="" />
                  </div>
                  <p className='mx-2 md:mx-36 mt-4 text-center '>{newsData.detail}</p>
               
        </div>
    );
};

export default BlogDetail;