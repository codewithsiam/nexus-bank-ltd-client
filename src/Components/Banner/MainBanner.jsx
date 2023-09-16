import React from 'react';

const MainBanner = ({banner, subBannerTitle, bannerTitle}) => {
    const bannerStyle = {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${banner})`, // Use the prop for the image URL
        height: '250px', // Adjust the height as needed
        display: 'flex',
        alignItems: 'center',
    };
    
    return (
      <div style={bannerStyle} className="mb-5 md:mb-10 cover">
        <div className="p-10 md:p-15">
          <h1 className="text-md">{subBannerTitle? subBannerTitle: "NBL"}</h1>
          <h2 className="text-3xl text-primary font-bold">{bannerTitle}</h2>
        </div>
      </div>
    );
};

export default MainBanner;