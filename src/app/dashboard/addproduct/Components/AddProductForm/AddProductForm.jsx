"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { FaUpload } from "react-icons/fa";
import Swal from "sweetalert2";

export default function AddProductForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    details_link: "",
  });
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const form = new FormData();
    form.append("image", file);

    setUploading(true);
    try {
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`,
        { method: "POST", body: form }
      );
      const data = await res.json();
      setImage(data.data.url);
      toast.success("Uploaded!");
    } catch (err) {
      console.error(err);
      toast.error("Image upload failed.");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      toast.error("Warning! Please upload an image before submitting");
      return;
    }

    const productData = { ...formData, image };

    setSubmitting(true);
    try {
      const res = await fetch(`http://localhost:3000/api/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });

      if (res.ok) {
        Swal.fire("Success!", "Product added successfully!", "success");
        setFormData({ name: "", description: "", price: "", details_link: "" });
        setImage(null);
      } else {
        Swal.fire("Error!", "Something went wrong while adding product.", "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error!", "Server error occurred.", "error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl rounded-2xl p-8 max-w-lg mx-auto space-y-6"
    >

      {/* Product Name */}
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
      />

      {/* Description */}
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
        rows={4}
        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
      />

      {/* Price */}
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
      />

      {/* Image Upload */}
      <label className="flex items-center gap-3 cursor-pointer border border-dashed border-gray-300 p-4 rounded-xl justify-center hover:bg-gray-50 transition">
        <FaUpload className="text-gray-500 text-lg" />
        <span className="text-gray-600 font-medium">
          {uploading ? "Uploading..." : "Upload Product Image"}
        </span>
        <input
          type="file"
          accept="image/*"
          hidden
          onChange={handleImageUpload}
        />
      </label>
      {image && (
        <img
          src={image}
          alt="Preview"
          className="w-40 h-40 object-cover rounded-xl mx-auto mt-2 border shadow"
        />
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
      >
        {submitting && (
          <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
        )}
        {submitting ? "Adding..." : "Add Product"}
      </button>
    </form>
  );
}
