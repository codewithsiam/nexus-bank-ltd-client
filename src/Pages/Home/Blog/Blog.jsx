import React from 'react';
import BlogNews from './BlogNews';

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
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center -mx-4">
                    <div className="w-full px-4">
                        <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                            <span className="font-semibold text-lg text-primary mb-2 block text-[#007999]">
                                Our Blogs
                            </span>
                            <h2
                                className=" font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                                Our Recent News
                            </h2>
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