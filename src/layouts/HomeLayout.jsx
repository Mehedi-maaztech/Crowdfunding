import React from 'react';
import NavBar from '../component/Navbar';
import Footer from '../component/Footer';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div>
            {/* <h2 className='text-2xl'>This is Home</h2> */}
            <header>
                <NavBar></NavBar>
            </header>
            <main className="min-h-[90vh] w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 flex flex-col items-center justify-start bg-base-100">
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;