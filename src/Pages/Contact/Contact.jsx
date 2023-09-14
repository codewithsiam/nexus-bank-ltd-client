import React, { useEffect } from 'react';
import ContactUs from '../Home/ContactUs/ContactUs';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../../HandleState/actions/authActions';

const Contact = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);
    const user = useSelector(state => state.auth.user);
    const isAdmin = useSelector(state => state.auth.isAdmin);

    useEffect(() => {
        const storedToken = localStorage.getItem('authToken');
        dispatch(fetchUserData(storedToken));
    }, [dispatch]);

    console.log("from redux", user, loading, isAdmin);
    return (
        <div className='my-16 max-w-screen-xl mx-auto'>
            <ContactUs/>
        </div>
    );
};

export default Contact;
