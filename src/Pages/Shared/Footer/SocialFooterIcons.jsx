import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';

const SocialFooterIcons = () => {
    return (
        <div>
            <ul className='flex gap-5'>
                <li className='cursor-pointer'>
                    <a href="#"> <FaFacebookF className='' /> </a>
                </li>
                <li className='cursor-pointer'>
                    <a href="#"> <AiFillInstagram className='' /> </a>
                </li>
                <li className='cursor-pointer'>
                    <a href="#"> <BsLinkedin className='' /> </a>
                </li>
                <li className='cursor-pointer'>
                    <a href="#"> <BsYoutube className='' /> </a>
                </li>
            </ul>
        </div>
    );
};

export default SocialFooterIcons;