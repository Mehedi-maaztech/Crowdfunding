import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
import { FaGoogle } from "react-icons/fa";

const Signin = () => {
    const { signinUser, setUser, signInwithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();
    const handleSignin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)

        signinUser(email, password)
            .then(res => {

                console.log("User logged in", res.user);

                const lastSignInTime = res.user.metadata.lastSignInTime;
                const loginInfo = { email, lastSignInTime }

                fetch('https://crowdfunding-server-yg1l.onrender.com/users', {
                    method: "PATCH",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loginInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log('sign in info updated in db',data)
                        toast('successfully signed in', data.displayname)
                    })
                const newUser = res.user
                setUser(newUser);
                // console.log(user, loginInfo);
                form.reset();
                navigate('/');
            })
            .catch(err => {
                console.log(err.message);
                // toast("Error, Check Credential")
            })
    }
    const hanadleGoogleSignIn = () => {
        signInwithGoogle()
            .then(result => {
                console.log(result.user);
                toast('successfully signed in')
                navigate('/');
            })
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
                    name="email"
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
                <p className='text-center py-5'>
                    <button className='btn btn-wide' onClick={hanadleGoogleSignIn}><FaGoogle />
                        Sign in with google</button>
                </p>
            </form>

        </div>
    );
};

export default Signin;