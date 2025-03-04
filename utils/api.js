import axios from "axios";

const API_BASE_URL = process.env.API_BASE_URL;

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
        });

        return response.data;
    } catch (error) {
        console.error("Registration failed:", error.response?.data?.message || error.message || "Unknown error");

        return {
            success: false,
            message: error.response?.data?.message || "Something went wrong. Please try again.",
        };
    }
};
