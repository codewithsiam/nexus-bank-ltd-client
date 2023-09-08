import Google from '../../components/Google/Google';
import loginImage from '../../assets/images/Registration/login-img.png'
import LoginForm from './LoginForm';
import Keyboard from './Keyboard';
import {Link} from 'react-router-dom';


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
                <div className=''>
                    <p>
                        <Link to="/dashboard/current-account">Current Account</Link>
                    </p>
                    <p>
                        <Link to="/dashboard/saving-account">Saving Account</Link>
                    </p>
                    <p>
                        <Link to="/dashboard/student-account">Student Account</Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Login;