import React from 'react';
import useForm from '../hooks/useForm';

export default function ContactForm() {
  const { formData, handleChange, resetForm } = useForm({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Form submitted successfully!");
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "300px", margin: "auto" }}>
      <h3>Contact Form</h3>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
      /><br />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
        type="email"
      /><br />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
      ></textarea><br />
      <button type="submit">Submit</button>
    </form>
  );
}
