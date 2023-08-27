import React from 'react';

const BlogNews = ({ news }) => {
    const { date, image, headline, title } = news
    console.log(title)
    return (
        <>
            <div className=" px-4 cursor-pointer">
                <div className="max-w-[370px] mx-auto mb-10">
                    <div className="rounded overflow-hidden mb-8">
                        <img
                            src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg"
                            alt="image"
                            className="w-full"
                        />
                    </div>
                    <div>
                        <span className="bg-gradient-to-r from-[#004F70] to-[#007C9C] rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-white mb-5">
                            {date}
                        </span>
                        <h3>
                            <a
                                href=""
                                className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary">
                                {title}
                            </a>
                        </h3>
                        <p className="text-base text-body-color">
                            {headline}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogNews;