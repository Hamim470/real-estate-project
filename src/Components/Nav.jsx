import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo2.png'
import { Profiler, useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../provider/AuthProvider';
const Nav = () => {
    const { user, logOut } = useContext(AuthContext);
    const location = useLocation();
    return (
        <nav className="bg-white shadow-md px-6 py-4">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                {/* Logo */}
                <div className="text-2xl font-bold text-blue-600">
                    <a href="/"><img className='h-10' src={logo} alt="" /></a>
                </div>

                {/* Navigation Links */}
                <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
                    {/* Buy */}
                    <li className="group relative cursor-pointer">
                        <NavLink to={'/buy'} className="hover:text-blue-600">Buy</NavLink>
                        <div className="absolute hidden group-hover:flex group-focus:flex top-full -left-29 bg-white shadow-lg rounded-md p-6 z-30 w-[520px] space-x-10">
                            {/* Homes for sale */}
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-3">Homes for sale</h4>
                                <ul className="space-y-1 text-sm">
                                    <li><a href="/buy/homes" className="block hover:text-blue-600">Homes for Sale</a></li>
                                    <li><a href="/buy/foreclosures" className="block hover:text-blue-600">Foreclosures</a></li>
                                    <li><a href="/buy/forsalebyowner" className="block hover:text-blue-600">For Sale by Owner</a></li>
                                    <li><a href="/buy/openhouses" className="block hover:text-blue-600">Open Houses</a></li>
                                    <li><a href="/buy/newconstruction" className="block hover:text-blue-600">New Construction</a></li>
                                    <li><a href="/buy/comingsoon" className="block hover:text-blue-600">Coming Soon</a></li>
                                    <li><a href="/buy/recentsales" className="block hover:text-blue-600">Recent Home Sales</a></li>
                                    <li><a href="/buy/allhomes" className="block hover:text-blue-600">All Homes</a></li>
                                </ul>
                            </div>

                            {/* Resources */}
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-3">Resources</h4>
                                <ul className="space-y-1 text-sm">
                                    <li><a href="/buy/guide" className="block hover:text-blue-600">Home Buying Guide</a></li>
                                    <li><a href="/buy/foreclosure-center" className="block hover:text-blue-600">Foreclosure Center</a></li>
                                    <li><a href="/buy/app" className="block hover:text-blue-600">Real Estate App</a></li>
                                    <li><a href="/buy/downpayment" className="block hover:text-blue-600">Down Payment Assistance</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    {/* Rent */}
                    <li className="group relative cursor-pointer">
                        <span className="hover:text-blue-600">Rent</span>
                        <div className="absolute hidden group-hover:flex group-focus:flex top-full -left-53 bg-white shadow-lg rounded-md p-6 z-30 w-[520px] space-x-10">
                            {/* Rentals */}
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-3">Rentals</h4>
                                <ul className="space-y-1 text-sm">
                                    <li><a href="#" className="block hover:text-blue-600">Neosho rentals</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">Apartments for rent</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">Houses for rent</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">All rental listings</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">All rental buildings</a></li>
                                </ul>
                            </div>
                            {/* Your rental */}
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-3">Your rental</h4>
                                <ul className="space-y-1 text-sm">
                                    <li><a href="#" className="block hover:text-blue-600">Your search</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">Saved searches</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">Inbox</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">Contacted rentals</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">Applications</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">Make a payment</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">Your lease</a></li>
                                </ul>
                            </div>
                            {/* Resources */}
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-3">Resources</h4>
                                <ul className="space-y-1 text-sm">
                                    <li><a href="#" className="block hover:text-blue-600">Rent with Zillow</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">Build your credit</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">Renters insurance</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">Affordability calculator</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">Rent Guide</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>


                    {/* Sell */}
                    <li className="group relative cursor-pointer">
                        <span className="hover:text-blue-600">Sell</span>
                        <div className="absolute hidden group-hover:flex group-focus:flex top-full -left-40 bg-white shadow-lg rounded-md p-6 z-30 w-[520px] space-x-10">
                            {/* Resources */}
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-3">Resources</h4>
                                <ul className="space-y-1 text-sm">
                                    <li><a href="#" className="block hover:text-blue-600">Explore your options</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">See your home's Zestimate</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">Neosho housing market</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">Sellers guide</a></li>
                                </ul>
                            </div>
                            {/* Selling options */}
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-3">Selling options</h4>
                                <ul className="space-y-1 text-sm">
                                    <li><a href="#" className="block hover:text-blue-600">Find a seller's agent</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">Post For Sale by Owner</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>


                    {/* Get a Mortgage */}
                    <li className="group relative cursor-pointer">
                        <span className="hover:text-blue-600">Get a Mortgage</span>
                        <div className="absolute hidden group-hover:flex group-focus:flex top-full -left-48 bg-white shadow-lg rounded-md p-6 z-30 w-[520px] space-x-10">
                            {/* Application Notice */}
                            <div>
                                <p className="font-semibold text-gray-800 mb-2">Started a loan application?</p>
                                <p className="text-sm mb-3">Pick up where you left off on your Zillow Home Loans dashboard.</p>
                                <a href="#" className="text-blue-600 text-sm hover:underline">Home Loans dashboard</a>
                            </div>
                            {/* Your mortgage */}
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-3">Your mortgage</h4>
                                <ul className="space-y-1 text-sm">
                                    <li><a href="#" className="block hover:text-blue-600">Discover Zillow Home Loans</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">Calculate your BuyAbility</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">Get pre-qualified</a></li>
                                </ul>
                            </div>
                            {/* Mortgage tools */}
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-3">Mortgage tools</h4>
                                <ul className="space-y-1 text-sm">
                                    <li><a href="#" className="block hover:text-blue-600">Estimate your mortgage payment</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">See current mortgage rates</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">Learn about financing a home</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>


                    {/* Find an Agent */}
                    <li className="group relative cursor-pointer">
                        <span className="hover:text-blue-600">Find an Agent</span>
                        <div className="absolute hidden group-hover:flex group-focus:flex top-full -left-35 bg-white shadow-lg rounded-md p-6 z-30 w-[520px] space-x-10">
                            {/* Looking for pros */}
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-3">Looking for pros?</h4>
                                <ul className="space-y-1 text-sm">
                                    <li><a href="#" className="block hover:text-blue-600">Real estate agents</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">Property managers</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">Home inspectors</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">Other pros</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">Home improvement pros</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">Home builders</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">Real estate photographers</a></li>
                                </ul>
                            </div>
                            {/* I'm a pro */}
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-3">I'm a pro</h4>
                                <ul className="space-y-1 text-sm">
                                    <li><a href="#" className="block hover:text-blue-600">Agent advertising</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">Agent resource center</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">Create a free agent account</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">Real estate business plan</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">Real estate agent scripts</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">Listing flyer templates</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>


                    {/* Manage Rentals */}
                    <li className="group relative cursor-pointer">
                        <span className="hover:text-blue-600">Manage Rentals</span>
                        <div className="absolute hidden group-hover:flex group-focus:flex top-full -left-30 bg-white shadow-lg rounded-md p-6 z-30 w-[520px] space-x-10">
                            {/* Rental Management Tools */}
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-3">Rental Management Tools</h4>
                                <ul className="space-y-1 text-sm">
                                    <li><a href="#" className="block hover:text-blue-600">List a rental</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">My Listings</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">Inbox</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">Applications</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">Leases</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">Payments</a></li>
                                </ul>
                            </div>
                            {/* Learn More */}
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-3">Learn More</h4>
                                <ul className="space-y-1 text-sm">
                                    <li><a href="#" className="block hover:text-blue-600">Zillow Rental Manager</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">Price My Rental</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">Resource Center</a></li>
                                    <li><a href="#" className="block hover:text-blue-600">Help Center</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>


                    {/* Advertise */}
                    <li className="relative group cursor-pointer">
                        <span className="hover:text-blue-600">Advertise</span>
                        {/* You can add dropdown here if needed */}
                    </li>

                    {/* Help */}
                    <li className="relative group cursor-pointer">
                        <span className="hover:text-blue-600">Help</span>
                        {/* You can add dropdown here if needed */}
                    </li>

                    {
                        user ?

                            <li className="relative group cursor-pointer flex items-center justify-center">
                                <div className="hover:text-blue-600 flex items-center justify-center">
                                    <FaUser></FaUser>
                                </div>

                                <span className='hidden group-hover:flex absolute top-5 bg-white p-1 shadow-sm rounded-lg flex flex-col min-w-max px-3 absolute -right-7'>

                                    <div>
                                        <faUser></faUser>
                                        <h2>{user.displayName}</h2>
                                    </div>

                                    <hr />

                                    <Link className='hover:text-blue-600'>
                                        Saved Home
                                    </Link>
                                    <Link className='hover:text-blue-600'>
                                        Saved Searches
                                    </Link>
                                    <Link className='hover:text-blue-600'>
                                        Inbox
                                    </Link>
                                    <Link className='hover:text-blue-600'>
                                        Manage Tour
                                    </Link>
                                    <Link className='hover:text-blue-600'>
                                        Recently Viewed
                                    </Link>
                                    <Link className='hover:text-blue-600'>
                                        Your Team
                                    </Link>
                                    <Link className='hover:text-blue-600'>
                                        Your Home
                                    </Link>
                                    <Link className='hover:text-blue-600'>
                                        Renter Hub
                                    </Link>
                                    <Link className='hover:text-blue-600'>
                                        Account Settings
                                    </Link>

                                    <hr />

                                    <Link onClick={() => {
                                        logOut()
                                            .then(() => {
                                                console.log('SignOut successfull');
                                            })
                                            .catch(error => {
                                                console.log(error);
                                            })
                                    }} to={'/login'} state={location.pathname} className="hover:text-blue-600">LogOut</Link>
                                </span>

                            </li>
                            :

                            < li className="relative group cursor-pointer">
                                <Link to={'/login'} state={location.pathname} className="hover:text-blue-600">Login</Link>
                                {/* You can add dropdown here if needed */}
                            </li>
                    }
                </ul>
            </div>
        </nav >
    );
};

export default Nav;
