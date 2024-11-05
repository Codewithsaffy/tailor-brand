"use client";
import React from "react";
import { FaUser } from "react-icons/fa";
import {  useToast } from "@/hooks/use-toast";
import { useState } from "react";
import axios from "axios";
import { FiMail, FiMapPin } from "react-icons/fi";

const Form = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post("/api/contact", formData);

      if (response.status === 200) {
        toast({ description: "Message sent successfully!" });
      } else {
        toast({ description: "Failed to send message." });
      }
    } catch (error) {
      console.log(error);
      toast({ description: "An error occurred. Please try again later." });
    } finally {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center space-x-2">
        <FaUser className="text-[#f9b53a] hover:scale-110 transition-transform duration-300" />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f9b53a] transition-transform duration-200 hover:scale-105"
          required
        />
      </div>

      <div className="flex items-center space-x-2">
        <FiMail className="text-[#f9b53a] hover:scale-110 transition-transform duration-300" />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f9b53a] transition-transform duration-200 hover:scale-105"
          required
        />
      </div>

      <div className="flex items-center space-x-2">
        <FiMapPin className="text-[#f9b53a] hover:scale-110 transition-transform duration-300" />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={3}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f9b53a] transition-transform duration-200 hover:scale-105"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-2 bg-[#f9b53a] text-[#1a2a00] font-semibold rounded-lg transition-transform duration-300 transform hover:bg-[#f7a52c] ${
          isSubmitting ? "animate-pulse" : "hover:scale-105"
        }`}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg
              className="w-5 h-5 mr-2 text-[#1a2a00] animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path d="M4 12a8 8 0 018-8v8H4z" fill="currentColor"></path>
            </svg>
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
};

export default Form;
