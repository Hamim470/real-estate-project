import { FaSearch } from 'react-icons/fa';
import homePageBG from '../assets/HomePageBGdesign.png'
import { Link } from 'react-router-dom';
import logoWithName from '../assets/logo2.png'
import Footer from '../Components/Footer';
const Home = () => {
    return (
        <div className=''>
            <div className='h-120 bg-cover bg-center bg-no-repeat flex flex-col justify-center pl-30' style={{ backgroundImage: `url(${homePageBG})` }}>
                <h1 className='text-6xl font-black text-white text-shadow-lg pb-4'>
                    Agents. Tours.
                    <br />
                    Loans. Homes.
                </h1>
                <div className='relative'>
                    <input className='shadow-2xl border-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-sm h-12 w-128 pl-3' type="text" placeholder='Enter an address, neighborhood, city, or ZIP code' />
                    <button className='absolute top-4 left-120'>
                        <FaSearch></FaSearch>
                    </button>
                </div>
            </div>

            {/* home recommendations section */}
            <section className='flex justify-center-safe gap-40 items-center my-20'>
                <div className=''>
                    <h4 className='font-semibold text-gray-800 text-xl'>Get home recommendations</h4>
                    <p className='text-gray-500 mb-4'>Sign in for a more personalized experience.</p>
                    <Link className='text-blue-600 border-blue-600 border-2 rounded-lg px-1.5 py-1' to={'/login'}>
                        Sign In
                    </Link>
                </div>
                <div>
                    <img src='https://www.zillowstatic.com/s3/web-platform/sub-apps/hops-homepage/hops-homepage.prod.master.10066172.0f61522c/web/a03d28d86d858234534306b63a6de3b2.jpg' alt="" />
                </div>
            </section>

            {/* Find homes in afford  */}
            <section className='text-center'>
                <h1 className='font-semibold text-gray-800 text-2xl'>Find homes you can afford with BuyAbility℠
                </h1>
                <p className='text-gray-500'>Answer a few questions. We'll highlight homes you're likely to qualify for.
                </p>
                <div className='flex flex-col justify-center items-center '>
                    <div className='border-2 border-gray-300 shadow-lg rounded-md px-9 py-4 mt-4 space-y-8'>
                        <img className='h-9 flex justify-center items-center' src={logoWithName} alt="" />
                        <div className='flex gap-11 text-left'>
                            <div>
                                <h1 className='font-semibold text-gray-800 text-xl'>$ --</h1>
                                <p className='text-gray-500'>Suggested target price
                                </p>
                            </div>
                            <div>
                                <h1 className='font-semibold text-gray-800 text-xl'>$ --</h1>
                                <p className='text-gray-500'>BuyAbility℠
                                </p>
                            </div>
                        </div>
                        <div className='flex gap-11 text-left'>
                            <div>
                                <h1 className='font-semibold text-gray-800 text-xl'>$ --</h1>
                                <p className='text-gray-500'>
                                    Mo. payment
                                </p>
                            </div>
                            <div>
                                <h1 className='font-semibold text-gray-800 text-xl'>$ --</h1>
                                <p className='text-gray-500'>Today's rate
                                </p>
                            </div>
                            <div>
                                <h1 className='font-semibold text-gray-800 text-xl'>$ --</h1>
                                <p className='text-gray-500'>
                                    APR
                                </p>
                            </div>
                        </div>
                    </div>
                    <button className='text-white bg-blue-800 px-4 py-1 rounded-lg font-bold my-3 shadow-blue-500 shadow-sm'>
                        Let's get started
                    </button>
                </div>
            </section>

            {/* 3 Card */}
            <section className='bg-gray-100 p-7 flex gap-6'>
                <div className='bg-white shadow-lg rounded-lg flex flex-col justify-center items-center p-4 text-center space-y-4'>
                    <img className='w-1/2' src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/04/homepage-spot-agent-lg.jpg" alt="" />
                    <h1 className='font-semibold text-gray-800 text-2xl'>Buy a Home</h1>
                    <p className='text-gray-500'>Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
                    <button className='bg-white text-blue-800 px-4 py-1 rounded-lg font-bold my-3 shadow-blue-500 shadow-sm'>
                        Browse Homes
                    </button>
                </div>
                <div className='bg-white shadow-lg rounded-lg flex flex-col justify-center items-center p-4 text-center space-y-4'>
                    <img className='w-1/2' src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/04/homepage-spot-sell-lg.jpg" alt="" />
                    <h1 className='font-semibold text-gray-800 text-2xl'>Sell a Home</h1>
                    <p className='text-gray-500'>No matter what path you take to sell your home, we can help you navigate a successful sale.</p>
                    <button className='bg-white text-blue-800 px-4 py-1 rounded-lg font-bold my-3 shadow-blue-500 shadow-sm'>
                        See your options
                    </button>
                </div>
                <div className='bg-white shadow-lg rounded-lg flex flex-col justify-center items-center p-4 text-center space-y-4'>
                    <img className='w-1/2' src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/04/homepage-spot-rent-lg.jpg" alt="" />
                    <h1 className='font-semibold text-gray-800 text-2xl'>Rent a Home</h1>
                    <p className='text-gray-500'>We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.</p>
                    <button className='bg-white text-blue-800 px-4 py-1 rounded-lg font-bold my-3 shadow-blue-500 shadow-sm'>
                        Find rentals
                    </button>
                </div>
            </section>

            {/* <Footer></Footer> */}

        </div>
    );
};

export default Home;