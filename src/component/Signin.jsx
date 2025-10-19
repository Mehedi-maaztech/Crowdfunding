import React from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {

    const handleSignin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

    }
    return (
        <div className="max-w-7xl mx-auto px-4 min-h-[80vh] flex justify-center items-center">
            <form
                className="fieldset bg-base-100 border-base-100 shadow rounded-box w-full max-w-2xl mx-auto border p-10 sm:p-8"
                onSubmit={handleSignin}
            >
                <legend className="fieldset-legend text-xl font-bold">Sign In</legend>

                {/* User Name */}
                <label className="label mt-4">Email</label>
                <input
                    type="text"
                    name="username"
                    className="input input-bordered w-full"
                    placeholder="Email"
                />

                {/* User Name */}
                <label className="label mt-4">Password</label>
                <input
                    type="password"
                    name="password"
                    className="input input-bordered w-full"
                    placeholder="Password"
                />

                {/* Add Button */}
                <button className="btn btn-warning mt-6 w-full">Add New</button>

                {/* Footer link */}
                <p className="text-center text-sm mt-4">
                    Don’t have an account?{" "}
                    <Link to="/auth/register" className="link link-hover font-medium text-primary">
                        Register now
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Signin;