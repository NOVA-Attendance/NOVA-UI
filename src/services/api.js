// --------------------------------------------------------------
// api.js – Axios service
// --------------------------------------------------------------
// This file centralizes API communication for the frontend.
// Instead of calling fetch() directly everywhere, we use this
// axios instance so that all requests share the same base URL
// and can easily add headers or interceptors in the future.
// --------------------------------------------------------------

import axios from "axios";

// Create an axios instance with a base URL pointing to our backend API.
// The URL can be customized via environment variable (.env file) so
// we don't hardcode localhost for production or testing environments.

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8000",
});
