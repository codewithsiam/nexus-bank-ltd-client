import Google from '../../components/Google/Google';
import loginImage from '../../assets/images/Registration/login-img.png'
import LoginForm from './LoginForm';
import Keyboard from './Keyboard';



const Login = () => {

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center px-3 mt-11">
            <div className="">
                <div className="mx-auto mb-0 mt-8 space-y-4">
                    {/* <LoginForm/> */}

                    <Keyboard/>
                    {/* <Google /> */}
                </div>
            </div>

            <div className="">
                <p className="font-bold">Guidelines for safety banking online</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem facilis tenetur, molestiae, ex, quae voluptatem illum quo neque magnam suscipit optio! Illo est nemo ea magnam doloribus nihil, rerum quidem.</p>
            </div>
        </section>
    );
};

export default Login;