import React from 'react';
import BlogNews from './BlogNews';
import CenterTitle from '../../Components/Title/CenterTitle';
import useDesignation from '../../Hooks/useDesignation';
import { useState } from 'react';
import { useEffect } from 'react';
import { baseUrl } from '../../config/server';

const BlogPage = () => {
    const {designation} = useDesignation();
    console.log(designation)
    const [blogNews,setBlogNews]=useState([])
    useEffect(()=>{
        fetch(`${baseUrl}/getBlogs`).then(res=>res.json()).then(data=>{
            console.log(data)
            setBlogNews(data)
        })
    },[])



    return (
        <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F7F9FA]">
            <div className="w-full max-w-screen-xl mx-auto">
                <div className="gird grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="w-full px-4">
                        <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                            <CenterTitle
                                subHeading={"Our Blogs"}
                                heading={"Our Recent News"}>
                            </CenterTitle>
                            <p className="text-base text-body-color">
                                There are many variations of passages of Lorem Ipsum available
                                but the majority have suffered alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 gap-5 mx-4">
                    {
                        blogNews?.map(news => <BlogNews
                            news={news}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default BlogPage;