import {Link} from 'react-router-dom'
export default function Header() {
  return (

<nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto fixed top-0 w-full">
	<div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">

		<div className="text-indigo-500 md:order-1">
	
			{/* <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
				stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
					d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
			</svg> */}
		</div>

        <div className="flex justify-between items-center w-full">
            {/* Left section: Home and Shop links */}
            <div className="flex space-x-4 list-none">
                <Link to="/">
                    <li className="md:px-4 md:py-2 hover:text-indigo-400 ">Home</li>
                </Link>
                <Link to="/shop">
                    <li className="md:px-4 md:py-2 hover:text-indigo-400">Shop</li>
                </Link>
            </div>

            {/* Middle section: Company name */}
            <div className="text-center list-none">
                <Link to='/'>

                    <li className="text-lg font-bold">Company Name</li>
                </Link>
            </div>

            {/* Right section: Search, User, and Cart icons */}
            <div className="flex space-x-4 list-none gap-5">
                <Link to="/search">
                    <li ><box-icon name='search' color=''></box-icon></li>
                </Link>
                <Link to="/user">
                    <li ><box-icon name='user' color=''></box-icon></li>
                </Link>
                <Link to="/cart">
                    <li ><box-icon name='cart-alt' color=''></box-icon></li>
                </Link>
            </div>
		</div>
		{/* <div className="order-2 md:order-3">
			<button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
                
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Login</span>
            </button>
		</div> */}
	</div>
</nav>
  )
}
