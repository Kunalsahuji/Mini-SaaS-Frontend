import { createContext, useState, useEffect } from "react";
import api from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        try {
            const { data } = await api.post("/api/auth/login", { email, password });
            localStorage.setItem("accessToken", data.data.accessToken);
            localStorage.setItem("refreshToken", data.data.refreshToken);

            // Fetch profile immediately after login
            await fetchProfile();
        } catch (err) {
            toast.error(err.response?.data?.message || err.response || "Login failed");

        }
    };

    const logout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        setUser(null);
    };

    const fetchProfile = async () => {
        try {
            const { data } = await api.get("/api/users/profile");
            setUser(data.user); // backend returns { email, plan, role, name }
        } catch (err) {
            toast.error(err.response?.data?.message || err.response || "Login failed");
            setUser(null);
            // Optionally rethrow if you want toast handling in components
            // throw err;
        }
    };

    // Auto-fetch profile if tokens exist (page refresh)
    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            fetchProfile();
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout, fetchProfile }}>
            {children}
        </AuthContext.Provider>
    );
};
