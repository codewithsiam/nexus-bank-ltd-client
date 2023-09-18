import Google from '../../components/Google/Google';
import loginImage from '../../assets/images/Registration/login-img.png'
import LoginForm from './LoginForm';
import Keyboard from './Keyboard';
import { Link } from 'react-router-dom';


const Login = () => {

    return (
        <section className="md:px-36 mt-11">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5  justify-center">
                <div className="">
                    <Keyboard />

                    <div className="bg-[#F8F8F8] shadow p-2">
                        <p className="bg-gradient-to-r from-[#004F70] to-[#007C9C] p-2 text-[#fff]">Accounts</p>
                        <div className='mt-5'>

                            <Link to="/student-account" className='flex items-center justify-between w-full mt-2'>
                                <button>Student Account</button>
                                <span className="bg-gradient-to-r from-[#004F70] to-[#007C9C] text-white px-3 py-1 rounded">
                                    Register
                                </span>
                            </Link>

                            <Link to='/saving-account' className='flex items-center justify-between w-full mt-2'>
                                <button>Saving Account</button>
                                <span className="bg-gradient-to-r from-[#004F70] to-[#007C9C] text-white px-3 py-1 rounded">
                                    Register
                                </span>
                            </Link>

                            <Link to="/current-account" className='flex items-center justify-between w-full mt-2'>
                                <button>Current Account</button>
                                <span className="bg-gradient-to-r from-[#004F70] to-[#007C9C] text-white px-3 py-1 rounded">
                                    Register
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='md:px-7'>
                    {/* help support */}
                    <div className="bg-[#F8F8F8] p-4 h-[150px] flex flex-col justify-center">
                        <h2 className='font-bold text-[#EA0E17]'>Help & Support</h2>
                        <p className='text-sm'>Frequently Asked Questions</p>
                        <Link className='text-[#005273] underline' to='/dashboard/nexus-customer-service-portal'>Nexus Customer Service Portal</Link>
                    </div>


                    {/* contact us */}
                    <div className="bg-[#F8F8F8] p-4 mt-5 h-[150px] flex flex-col justify-center">
                        <h2 className='font-bold text-[#EA0E17]'>Contact Us</h2>
                        <p className='text-sm'>Any questions or concerns please call</p>
                        <Link className='text-[#005273] underline' to='/contact'>Nexus Contact Us</Link>

                        <h2 className="font-bold mt-4">Gmail</h2>
                        <p className="text-sm">webwizards@gmail.com</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;