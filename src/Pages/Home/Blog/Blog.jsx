import React from 'react';
import BlogNews from './BlogNews';
import CenterTitle from '../../../Components/Title/CenterTitle';

const Blog = () => {
    const blogNews = [
        {
            date: 'Dec 22, 2023',
            image: 'https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg',
            headline: ' Meet AutoManage, the best AI management tools',
            title: ' Lorem Ipsum is simply dummy text of the printing'
        },
        {
            date: 'OCT 02, 2019',
            image: 'https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-02.jpg',
            headline: ' Meet AutoManage, the best AI management tools',
            title: ' Lorem Ipsum is simply dummy text of the printing'
        },
        {
            date: 'JAN 02, 2023',
            image: 'https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-03.jpg',
            headline: ' Meet AutoManage, the best AI management tools',
            title: ' Lorem Ipsum is simply dummy text of the printing'
        }
    ]
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

export default Blog;