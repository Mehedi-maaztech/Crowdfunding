import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const AddNew = () => {
  const {user} = useContext(AuthContext);
  // console.log(user)
  const handleAddCampaign = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const campainTitle = form.campainTitle.value;
    const campaignType = form.campaignType.value;
    const description = form.description.value;
    const donation = form.donation.value;
    const deadline = form.deadline.value;
    const email = form.email.value;
    const username = form.username.value;
    const formData = { image, campainTitle, campaignType, description, donation, deadline, email, username }
    // console.log(formData);

    fetch('https://crowdfunding-server-yg1l.onrender.com/campaigns', {
      method: "POST",
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => console.log(data))

    form.reset();
    
  }
  return (
    <div className="max-w-7xl mx-auto px-4 min-h-[80vh] flex justify-center items-center">
      <form
        className="fieldset bg-base-100 border-base-100 shadow rounded-box w-full max-w-2xl mx-auto border p-10 sm:p-8"
        onSubmit={handleAddCampaign}
      >
        <legend className="fieldset-legend text-xl font-bold">Add New Campaign</legend>

        {/* Image */}
        <label className="label mt-4">Image</label>
        <input
          type="text"
          name="image"
          className="input input-bordered w-full"
          placeholder="Image URL"
        />

        {/* Campaign Title */}
        <label className="label mt-4">Campaign Title</label>
        <input
          type="text"
          name="campainTitle"
          className="input input-bordered w-full"
          placeholder="Title"
        />

        {/* Campaign Type */}
        <label className="label mt-4">Campaign Type</label>
        <select defaultValue="Pick a Type" className="select w-full" name="campaignType">
          <option disabled={true}>Pick a Type</option>
          <option>personal issue</option>
          <option>startup</option>
          <option>business</option>
          <option>creative ideas</option>
        </select>

        {/* Description */}
        <label className="label mt-4">Description</label>
        <input
          type="text"
          name="description"
          className="input input-bordered w-full"
          placeholder="Description"
        />

        {/* Donation Amount */}
        <label className="label mt-4">Donation Amount</label>
        <input
          type="number"
          name="donation"
          className="input input-bordered w-full"
          placeholder="Donation Amount"
        />

        {/* Deadline */}
        <label className="label mt-4">Deadline</label>
        <input
          type="datetime-local"
          name="deadline"
          className="input input-bordered w-full"
          placeholder="Deadline" />

        {/* User Email */}
        <label className="label mt-4">User Email</label>
        <input
          type="email"
          name="email"
          className="input input-bordered w-full cursor-not-allowed"
          placeholder="Email"
          defaultValue={user.email}
          readOnly
        />

        {/* User Name */}
        <label className="label mt-4">User Name</label>
        <input
          type="text"
          name="username"
          className="input input-bordered w-full cursor-not-allowed"
          placeholder="Your Name"
          defaultValue={user.displayName}
          readOnly
        />

        {/* Add Button */}
        <button className="btn btn-warning mt-6 w-full">Add New</button>
      </form>
    </div>
  );
};

export default AddNew;
