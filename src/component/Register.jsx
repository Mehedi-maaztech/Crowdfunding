
const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        //const user = {email, password}
        console.log(name, email, password)

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
                    readOnly
                />

                {/* User Image */}
                <label className="label mt-4">Image</label>
                <input
                    type="text"
                    name="image"
                    className="input input-bordered w-full"
                    placeholder="Image URL"
                    readOnly
                />

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
            </form>
        </div>
    );
};

export default Register;