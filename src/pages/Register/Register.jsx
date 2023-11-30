import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import SocialLogin from "../../componets/SocialLogin/SocialLogin";
import { updateProfile } from "firebase/auth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";


const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { createUser } = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleUserRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, password, photo);

        if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{6,}$/.test(password)) {
            // setRegisterError('Password Minimum 6 characters, at least one uppercase letter, one number and one special character:');
            Swal.fire({
                title: 'Error!',
                text: 'Password Minimum 6 characters, at least one uppercase letter, one number and one special character:',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
        else {
            createUser(email, password)
                .then(result => {
                    console.log(result);
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'CONGRATULATIONS! You have now successfully registered! ',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    //update name and photo url
                    updateProfile(result.user, {
                        displayName: name,
                        photoURL: photo,
                    })
                    .then(()=>{
                       const userData ={
                        name: name,
                        email:email
                       }
                       axiosPublic.post('/users', userData)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('User profile info Updated');
                                    Swal.fire({
                                        position: "center",
                                        icon: "success",
                                        title: "User Created Successfully.",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    event.target.reset();
                                }
                                navigate('/')
                            })
                    })
                   
                    // navigate('/');

                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
    return (
        <div>
            <Helmet>
                <title>Matrimony | Register</title>
            </Helmet>
            <section className="bg-blue-200 text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="w-full max-w-md md:mt-5 lg:mt-0 p-8 space-y-3 rounded-xl bg-blue-500 text-white">
                        <h1 className="text-2xl font-bold text-center">Register</h1>
                        <form onSubmit={handleUserRegister} className="space-y-3">
                            <div className="space-y-1 text-sm">
                                <label className="block text-white">Name</label>
                                <input type="text" name="name" placeholder="Name" className="w-full px-4 py-3 rounded-md border-gray-700 bg-blue-900 text-gray-100 focus:border-violet-400" required />
                            </div>
                            <div className="space-y-1 text-sm">
                                <label className="block text-white">email</label>
                                <input type="email" name="email" placeholder="email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-blue-900 text-gray-100 focus:border-violet-400" required />
                            </div>
                            <div className="space-y-1 text-sm relative">
                                <label className="block text-white">Password</label>
                                <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-blue-900 text-gray-100 focus:border-violet-400" required />
                                <span className=" absolute -ml-8 pt-4" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEyeSlash className="  text-blue-100 text-lg"></FaEyeSlash> : <FaEye className=" text-blue-300 text-lg"></FaEye>
                                    }
                                </span>
                            </div>
                            <div className="space-y-1 text-sm">
                                <label className="block text-white">Photo Url</label>
                                <input type="text" name="photo" placeholder="Photo Url" className="w-full px-4 py-3 rounded-md border-gray-700 bg-blue-900 text-gray-100 focus:border-violet-400" required />
                            </div>

                            <button className="block w-full p-3 text-center rounded-sm text-White bg-blue-900"> Register</button>
                        </form>
                        <div className="flex items-center pt-4 space-x-1">
                            <div className="flex-1 h-px sm:w-16 bg-blue-900"></div>
                            <p className="px-3 text-sm text-white">Login with social accounts</p>
                            <div className="flex-1 h-px sm:w-16 bg-blue-900"></div>
                        </div>
                        <div className="my-6 space-y-4 bg-blue-900">
                           
                            <SocialLogin></SocialLogin>
                        </div>

                        <p className="text-base text-center sm:px-6 text-white mt-6">You have an account?
                            <a rel="noopener noreferrer" href="#" className=" text-blue-950 font-bold"><Link to='/login'> Login up </Link></a>
                        </p>

                    </div>
                    <div className="flex ">
                        <img src="https://i.ibb.co/ftgBTcW/d.png" alt="" className="object-contain h-[100vh]" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;