import React from 'react';

const Video = () => {


    return (
        <div className="max-w-md mx-auto my-8 p-4 bg-gray-200 rounded-lg shadow-lg">
            <iframe
                className="w-full rounded-lg"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Iqp3zfrk2dk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default Video;