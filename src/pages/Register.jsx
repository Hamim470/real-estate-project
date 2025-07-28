import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import googleLogo from '../assets/google.png'

const Register = () => {
    const { register,signInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const notify = () => toast('Successfully done!!!');
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        setError('');

        if (password.length < 6) {
            setError('Password should be at least 6 charecter');
            return;
        }
        if (password !== confirmPassword) {
            setError("Password Doesn't match");
            return;
        }
        if (!name || !password || !email || !confirmPassword) {
            setError('All fields are required');
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError('Please enter a valid Email address');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setError('Password must include at least one uppercase letter');
            return;
        }
        if (!/[a-z]/.test(password)) {
            setError('Password must include at least one lowercase letter');
            return;
        }
        if (!/\d/.test(password)) {
            setError('Password must include at least one number');
            return;
        }
        if (!/[!@#$%^&*(),.<>?{}|]/.test(password)) {
            setError('Password must include at least one spcial charecter');
            return;
        }

        register(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User registration Successfull');
                notify();

                setInterval(() => {
                    navigate('/login');
                }, 5000);
            })
            .catch(error => {
                console.log('error : ', error.code);
                console.log('error : ', error.message);
            })
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Create Your Account</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            name="name"

                            className="mt-1 w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="John Doe"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="text"
                            name="email"

                            className="mt-1 w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"

                            className="mt-1 w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="********"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"

                            className="mt-1 w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="********"
                        />
                    </div>

                    {
                        error && <p className="text-red-700">{error}</p>
                    }
                    {
                        success && <p className="text-green-700">{success}</p>
                    }

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Register
                    </button>

                    <button
                        onClick={()=>signInWithGoogle()
                            .then(result=>{
                                console.log(result.user);
                                navigate('/');
                            })
                            .catch(error=>{
                                console.log('error: ',error);
                            })
                        }
                        className="w-full flex items-center justify-center gap-3 px-5 py-2.5 rounded-lg border border-gray-300 hover:border-blue-600 hover:shadow-md transition-all duration-300 text-gray-700 bg-white font-medium"
                    >
                        <img className="h-5" src={googleLogo} alt="" />
                        <span className="text-sm sm:text-base">Continue with Google</span>
                    </button>
                </form>


                <p className="mt-4 text-sm text-center text-gray-600">
                    Already have an account?{' '}
                    <Link to="/login" className="text-blue-600 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;