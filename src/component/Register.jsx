import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {

    const { createUser, updateUser } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(res => {
                const createdAT = res?.user?.metadata?.creationTime;
                const fireid = res.user.uid;
                const newUser = { name, email, fireid, createdAT }

                fetch(`http://localhost:5000/users`, {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("user created ", data)
                        toast("user created");
                    })

                updateUser({
                    displayName: name,
                    photoURL :image
                })
                .then(() => { })
                .catch(error => {
                    toast(error);
                });
                // setUser(newUser);
                form.reset();
                navigate('/auth/signin');
            })
            .catch(err => {
                console.log(err.message)
            })
    }
    return (
        <div className="max-w-7xl mx-auto px-4 min-h-[80vh] flex justify-center items-center">
            <form
                className="fieldset bg-base-100 border-base-100 shadow rounded-box w-full max-w-2xl mx-auto border p-10 sm:p-8"
                onSubmit={handleRegister}
            >
                <legend className="fieldset-legend text-xl font-bold">Register</legend>

                {/* User Name */}
                <label className="label mt-4">Name</label>
                <input
                    type="name"
                    name="name"
                    className="input input-bordered w-full"
                    placeholder="Name"
                />

                {/* User Image */}
                <label className="label mt-4">Image</label>
                <input
                    type="text"
                    name="image"
                    className="input input-bordered w-full"
                    placeholder="Image URL"
                />

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
                    Already have an account?{" "}
                    <Link to="/auth/signin" className="link link-hover font-medium text-primary">
                        Login now
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Register;