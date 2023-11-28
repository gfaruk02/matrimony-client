
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../../componets/SocialLogin/SocialLogin";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const {signIn} = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname ||"/";
    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password =form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your Login Successfull",
                showConfirmButton: false,
                timer: 1500
              });
        })
        navigate(from, {replace: true})
    }
    return (
        <div className="mt-5">
            <section className="bg-rose-200 text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 ">
                        <img src='https://i.ibb.co/JsJFCX3/beautiful.png' alt="" className="object-contain h-72 mt-8 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>

                    <div className="w-full max-w-md md:mt-5 lg:mt-0 p-8 space-y-3 rounded-xl bg-rose-400 text-white">
                        <h1 className="text-2xl font-bold text-center">Login</h1>
                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-1 text-sm">
                                <label className="block text-white">email</label>
                                <input type="email" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-rose-800 text-gray-100 focus:border-violet-400" required />
                            </div>
                            <div className="space-y-1 text-sm relative">
                                <label className="block text-white">Password</label>
                                <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-rose-800 text-gray-100 focus:border-violet-400" required />
                                <span className=" absolute -ml-8 pt-4" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEyeSlash className="  text-rose-100 text-lg"></FaEyeSlash> : <FaEye className=" text-rose-300 text-lg"></FaEye>
                                    }
                                </span>
                                <div className="flex justify-end text-xs text-white">
                                    <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                                </div>
                            </div>
                            <button className="block w-full p-3 text-center rounded-sm text-White bg-rose-800">Sign in</button>
                        </form>
                        <div className="flex items-center pt-4 space-x-1">
                            <div className="flex-1 h-px sm:w-16 bg-rose-800"></div>
                            <p className="px-3 text-sm text-white">Login with social accounts</p>
                            <div className="flex-1 h-px sm:w-16 bg-rose-800"></div>
                        </div>
                        <div className="my-6 space-y-4 bg-rose-800">
                            <SocialLogin></SocialLogin>
                        </div>
                      
                       <p className="text-base text-center text-white mt-8">Dont have an account?
                            <a rel="noopener noreferrer" href="#" className="text-rose-950 font-bold">  <Link to="/register">Sign up </Link></a>
                        </p>
                   
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;