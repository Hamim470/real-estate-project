import { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import googleLogo from '../assets/google.png'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const LogIn = () => {
    const { logIn, signInWithGoogle,setLoading } = useContext(AuthContext);
    const [eye, setEye] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const notify = () => toast('Loged In Successfully!!!');
    console.log(location);
    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        logIn(email, password)
            .then(result => {
                setLoading(true);
                console.log(result.user);
                notify();

                setInterval(() => {
                    navigate(location.state?.from || '/')
                }, 3000)
                setLoading(false);
            })
            .catch(error => {
                console.log('error: ', error.code)
                console.log('error: ', error.message)
            })
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white shadow-md rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
                    Hometrack<span className="text-gray-800">ByBhiks</span> Login
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type={eye ? 'text' : 'password'}
                            name="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />

                        <span className="absolute h-full right-3 -bottom-9" onClick={() => setEye(!eye)}>
                            {
                                eye ?
                                    <FaRegEyeSlash></FaRegEyeSlash>
                                    :
                                    <FaRegEye></FaRegEye>
                            }
                        </span>
                    </div>

                    <div className="flex justify-between text-sm text-gray-600">
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            Remember me
                        </label>
                        <a href="#" className="text-blue-500 hover:underline">
                            Forgot password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                        Log In
                    </button>

                    <button
                        onClick={() => signInWithGoogle()
                            .then(result => {
                                setLoading(true);
                                console.log(result.user);
                                notify();
                                setInterval(() => {
                                    navigate(location.state?.from || '/')
                                }, 3000);
                                setLoading(false);
                            })
                            .catch(error => {
                                console.log('error: ', error);
                            })
                        }
                        className="w-full flex items-center justify-center gap-3 px-5 py-2.5 rounded-lg border border-gray-300 hover:border-blue-600 hover:shadow-md transition-all duration-300 text-gray-700 bg-white font-medium"
                    >
                        <img className="h-5" src={googleLogo} alt="" />
                        <span className="text-sm sm:text-base">Continue with Google</span>
                    </button>


                </form>

                <p className="text-sm text-center text-gray-600 mt-4">
                    Don't have an account?{" "}
                    <Link to={'/register'} className="text-blue-500 hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LogIn;