import Google from '../../components/Google/Google';
import loginImage from '../../assets/images/Registration/login-img.png'
import LoginForm from './LoginForm';



const Login = () => {

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center justify-center px-3 mt-11">
            <div className="">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">Login!</h1>

                    <p className="mt-4 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
                        eaque error neque ipsa culpa autem, at itaque nostrum!
                    </p>
                </div>

                <div className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                    <LoginForm/>

                    <Google />
                </div>
            </div>

            <div className="">
                <img
                    alt="Welcome"
                    src={loginImage}
                    className="hidden md:block w-5/6"
                />
            </div>
        </section>
    );
};

export default Login;