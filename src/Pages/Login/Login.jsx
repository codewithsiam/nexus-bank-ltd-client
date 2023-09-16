import Google from '../../components/Google/Google';
import loginImage from '../../assets/images/Registration/login-img.png'
import LoginForm from './LoginForm';
import Keyboard from './Keyboard';
import { Link } from 'react-router-dom';


const Login = () => {

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center px-3 mt-11">
            <div className="">
                <div className="mx-auto mb-0 mt-8 space-y-4">
                    {/* <LoginForm/> */}

                    <Keyboard />
                    {/* <Google /> */}
                </div>
            </div>

            <div className="">
                <p className="bg-[#00A7C7] p-2 text-[#fff]">Accounts</p>
                <div className='mt-5'>

                    <Link to="/student-account" className='flex items-center justify-between w-full mt-2'>
                        <button>Student Account</button>
                        <span className="bg-[#00A7C7] text-white px-5 py-2 rounded">
                            Register
                        </span>
                    </Link>

                    <Link to='/saving-account' className='flex items-center justify-between w-full mt-2'>
                        <button>Saving Account</button>
                        <span className="bg-[#00A7C7] text-white px-5 py-2 rounded">
                            Register
                        </span>
                    </Link>

                    <Link to="/current-account" className='flex items-center justify-between w-full mt-2'>
                        <button>Current Account</button>
                        <span className="bg-[#00A7C7] text-white px-5 py-2 rounded">
                            Register
                        </span>
                    </Link>
                    
                </div>
            </div>
        </section>
    );
};

export default Login;