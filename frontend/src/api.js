// Endereço do backend: na Vercel vem da variável VITE_API_URL, no computador usa o localhost
const API = import.meta.env.VITE_API_URL || "http://localhost:3000";

export default API;
