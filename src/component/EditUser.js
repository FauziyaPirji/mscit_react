import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const token = localStorage.getItem("token");
  const { id } = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async() => {
    const response = await axios.get(`http://localhost:5000/api/get-single-user/${id}`, {
        headers:{
          "Content-Type": "Application/json",
          "Authorization": "Bearer " + token
        }
      });
    if (response.data.data) {
      setFormData({
        name: response.data.data.name,
        email: response.data.data.email,
        phone: response.data.data.phone,
        address: response.data.data.address
      });
      setImagePreview(response.data.data.image);
    }
    else {
      setErrors("User not found");
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });

    setMessage("");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setMessage("Please select a valid image file");
      e.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setMessage("Image size must be less than 5 MB");
      e.target.value = "";
      return;
    }

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
    setMessage("");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (formData.phone && !/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");

    if (!validateForm()) {
      return;
    }

    try {
      const data = new FormData();

      data.append("name", formData.name.trim());
      data.append("email", formData.email.trim());
      data.append("phone", formData.phone);
      data.append("address", formData.address);

      if (imageFile) {
        data.append("image", imageFile);
      }

      const response = await axios.put(`http://localhost:5000/api/update-user/${id}`, data, {
        headers:{
          "Content-Type": "Application/json",
          "Authorization": "Bearer " + token
        }
      });
      if(response.data.data) {
        navigate("/user-data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">

      <div className="mx-auto max-w-2xl">

        {/* Heading */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Edit User
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Update user account
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200 sm:p-8">

          {/* Message */}
          {message && (
            <div
              className={`mb-6 rounded-lg px-4 py-3 text-sm ${
                message.includes("successfully")
                  ? "border border-green-200 bg-green-50 text-green-700"
                  : "border border-red-200 bg-red-50 text-red-700"
              }`}
            >
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Profile Image
              </label>

              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="User profile preview"
                  className="mb-4 h-32 w-32 rounded-xl border border-gray-200 object-cover"
                />
              ) : (
                <div className="mb-4 flex h-32 w-32 items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50 text-sm text-gray-400">
                  No image
                </div>
              )}

              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                className="block w-full rounded-lg border border-gray-300 p-3 text-sm text-gray-700 file:mr-4 file:rounded-md file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:font-medium file:text-blue-700 hover:file:bg-blue-100"
              />

              <p className="mt-2 text-xs text-gray-500">
                Select a new image to replace the existing one. Maximum size: 5 MB.
              </p>
            </div>
            
            {/* Name */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter name"
                className={`w-full rounded-lg border px-4 py-2.5 outline-none focus:ring-2 ${
                  errors.name
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-200"
                }`}
              />

              {errors.name && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                className={`w-full rounded-lg border px-4 py-2.5 outline-none focus:ring-2 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-200"
                }`}
              />

              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Phone
              </label>

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter 10 digit phone number"
                maxLength={10}
                className={`w-full rounded-lg border px-4 py-2.5 outline-none focus:ring-2 ${
                  errors.phone
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-200"
                }`}
              />

              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Address */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Address
              </label>

              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter address"
                rows={4}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
            >Submit
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
