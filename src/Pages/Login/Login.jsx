import Google from '../../components/Google/Google';
import registrationImage from '../../assets/images/Registration/registration-img.png'
import LoginForm from './LoginForm';



const Login = () => {

    return (
        <section className="relative flex flex-wrap lg:h-screen lg:items-center">
            <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
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

            <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                <img
                    alt="Welcome"
                    src={registrationImage}
                    className=""
                />
            </div>
        </section>
    );
};

export default Login;