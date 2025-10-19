import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
// const mockUser = {
//   isLoggedIn: true,
//   displayName: "Alex Johnson",
//   photoURL: "https://i.pravatar.cc/150?img=68" // Placeholder image
// };

const handleLogout = () => {
  console.log("User logged out");
  // In a real application, you'd implement your actual logout logic here
  alert("Logged out (Simulated)");
};

const NavBar = () => {
  // Replace this with your actual authentication hook/context
  // const user = mockUser.isLoggedIn ? mockUser : null;

  const [user, setUser] = useState({
    name: "Mehedi Hasan",
    email: "mehedi@gmail.com"
  })
  // Base navigation links for all users
  const navLinks = (
    <>
      <li><NavLink to="/" className=''>Home</NavLink></li>
      <li><NavLink to="/allCampaign">All Campaign</NavLink></li>
      {/* Protected routes shown only when logged in */}
      {user && (
        <>
          <li><NavLink to="/addNewCampaign">Add New Campaign</NavLink></li>
          <li><NavLink to="/myCampaign">My Campaign</NavLink></li>
          <li><NavLink to="/myDonations">My Donations</NavLink></li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 max-w-7xl mx-auto">

      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>

        <Link to="/" className="btn btn-ghost">
          <h2 className='text-xl font-bold text-yellow-800 font-logo'>CrowdCube</h2>
        </Link>
      </div>

      {/* Navbar Center - Main Navigation (Hidden on Small Screens) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>

      {/* Navbar End - Conditional Login/Logout/User Info */}
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="rounded-full w-10 h-10 overflow-hidden">
              <img src="https://media.istockphoto.com/id/1945802620/photo/portrait-of-handsome-bearded-man-in-glasses-outdoors.webp?s=2048x2048&w=is&k=20&c=4-pWS0vgUc003HVMS3QH77qwjLAR1sxdAlBLJ92CjI8=" alt="" className='object-cover'/>
            </div>
            <ul
              tabIndex="-1"
              className="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-52 p-2 shadow-sm">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
        ) : (
          <div className="space-x-2">
            <Link to='/auth/signin'>
              <button
                className="btn"
              >
                Log in
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;