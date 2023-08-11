

const LatestNews = () => {
    return (
        <div className="mt-8 nav-btn  p-2 rounded">
            <h2 className='text-4xl text-center text-white font-bold my-8'>Our Latest News</h2>
            <div className="card text-white  p-4 md:flex block h-full card-side bg-blue-400 shadow-xl">
                <div className="w-full md:w-1/2 rounded-xl  border-dashed border-2 border-indigo-600 ">
                    <div>
                        <figure>
                            <img className='p-4 rounded-xl' src='https://img.freepik.com/free-vector/banking-isometric-flowchart_1284-58041.jpg?w=740&t=st=1691731189~exp=1691731789~hmac=ba343353a479ebb691ad4d93b3621943184d029e37ef462fdbbcaa0b46508edc' alt="" />
                        </figure>
                    </div>
                </div>

                <div className="card-body  my-auto w-full md:w-1/2">
                    <h2 className="title text-4xl">Nexus Bank Update</h2>
                    <hr className="long-line" />
                    <hr className="short-line" />
                    <img className="w-[50px] h-50px]" src='https://i.ibb.co/hsGFcPC/download-removebg-preview.png' alt="" />
                    <div className="carousel w-full">
                        <div id="item1" className="carousel-item w-full">

                            <h2 className="font-semibold text-xl md:text-3xl italic ">Introducing Nexus Bank Ltd. new savings account promotion! We understand the importance of saving for your future, and we want to help you achieve your financial goals faster. Open a new savings account within the next two months and enjoy a competitive interest rate of 2.5%, along with a waived account maintenance fee for the first year. Take this opportunity to start building your savings with Nexus Bank Ltd reliable and customer-focused banking services.</h2>
                        </div>
                        <div id="item2" className="carousel-item w-full">
                            <h2 className="font-semibold text-xl md:text-3xl italic ">At Nexus Bank Ltd., we prioritize the security of your financial information. Thats why we are implementing two-factor authentication (2FA) for all online and mobile banking transactions. This extra layer of security adds another step to the login process, ensuring that only you can access your accounts. You will receive more details soon on how to set up 2FA and keep your accounts safe from unauthorized access.</h2>  </div>
                        <div id="item3" className="carousel-item w-full">
                            <h2 className="font-semibold text-xl md:text-3xl italic ">We are excited to announce a new feature at [Bank Name]! Starting next month, we will be rolling out an enhanced mobile banking app that offers a more intuitive and user-friendly experience. With improved navigation, a sleek design, and enhanced security features, managing your finances on the go has never been easier. Stay tuned for updates on how to download the app and enjoy seamless banking at your fingertips. </h2>

                        </div>
                        <div id="item4" className="carousel-item w-full">
                            <h2 className="font-semibold text-xl md:text-3xl italic ">Exciting News! [Bank Name] is expanding its branch network to better serve you. We are thrilled to announce the opening of two new branches in Dhaka and Rangpur next month. Our commitment to providing convenient access to our banking services remains a top priority. Whether you prefer in-person assistance or the convenience of digital banking, Nexus Bank Ltd is here to support your financial needs. Stay tuned for the exact opening dates and special promotions to celebrate the launch of these new branches.</h2>

                        </div>

                    </div>
                    <div className="flex justify-center w-full py-2 gap-2">
                        <a href="#item1" className="btn btn-xs">1</a>
                        <a href="#item2" className="btn btn-xs">2</a>
                        <a href="#item3" className="btn btn-xs">3</a>
                        <a href="#item4" className="btn btn-xs">4</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;