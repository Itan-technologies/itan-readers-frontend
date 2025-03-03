import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

export const registerAuthor = async (email, password) => {
    try {
        const response = await api.post("/authors", {
            author: { email, password },
        })

        return response.data
    } catch (error) {
        console.error("Registration failed: ", error.response?.data || error);
        throw error
    }
};