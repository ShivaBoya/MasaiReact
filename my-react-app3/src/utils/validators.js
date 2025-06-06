export const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

export const isStrongPassword = (password) =>
  password.length >= 6 && /[A-Z]/.test(password) && /[0-9]/.test(password);


// utils/formatters.js
export const formatDate = (date) => new Date(date).toLocaleDateString();

export const capitalize = (text) =>
  text.charAt(0).toUpperCase() + text.slice(1);

