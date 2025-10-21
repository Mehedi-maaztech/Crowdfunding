import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const NavBar = () => {
  const {user, signOutUser} = useContext(AuthContext);
  // console.log(user.displayName);
  const newUser = user?.displayName;
  const navLinks = (
    <>
      <li><NavLink to="/" className=''>Home</NavLink></li>
      <li><NavLink to="/allCampaign">All Campaign</NavLink></li>
      {/* Protected routes shown only when logged in */}
      {user && (
        <>
          <li><NavLink to="/addNewCampaign">Add New Campaign</NavLink></li>
          <li><NavLink to={`/myCampaign/user/${newUser}`}>My Campaign</NavLink></li>
          {/* <li><NavLink to="/myDonations">My Donations</NavLink></li> */}
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
            <div tabIndex={0} role="button" className="rounded-field">
              <button className='btn btn-ghost text-yellow-800'>{user.displayName}</button>
            </div>
            <ul
              tabIndex="-1"
              className="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-52 p-2 shadow-sm">
              <li><a>{user.email}</a></li>
              <li><button className='btn btn-wide' onClick={signOutUser}>Logout</button></li>
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