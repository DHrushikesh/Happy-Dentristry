import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

/* 🔹 STATIC THEME (edit colors here only) */
const theme = {
    background: "#0f172a",
    surface: "#020617",
    primary: "#2563eb",
    secondary: "#16a34a",
    border: "#334155",
    textPrimary: "#f8fafc",
    textSecondary: "#94a3b8",
};

function SignUp() {
    const navigateTo = useNavigate();
    const url = import.meta.env.VITE_HOST_URL;

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
    });

    function handlechange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handlesubmit(e) {
        e.preventDefault();

        if (
            !form.username.trim() ||
            !form.email.trim() ||
            !form.password.trim()
        ) {
            toast.error("All fields are required!");
            return;
        }

        postthedata(form);
    }

    async function postthedata(data) {
        try {
            const response = await axios.post(
                `${url}/api/users/register`,
                data
            );

            if (response.status === 201 || response.status === 200) {
                toast.success("User registered successfully!");
                navigateTo("/login");
            }
        } catch (error) {
            if (error.response) {
                toast.error(
                    error.response.data.message ||
                        "Registration failed!"
                );
            } else {
                toast.error("Network error!");
            }
        }
    }

    return (
        <section
            className="min-h-screen flex justify-center items-center px-4"
            style={{
                background: theme.background,
                color: theme.textPrimary,
            }}
        >
            <Toaster position="top-right" reverseOrder={false} />

            <form
                onSubmit={handlesubmit}
                className="flex justify-center items-center w-full"
                style={{ backdropFilter: "blur(16px)" }}
            >
                <div
                    className="flex flex-col w-full max-w-md gap-5 p-8 rounded-2xl shadow-lg"
                    style={{
                        background: theme.surface,
                        border: `2px solid ${theme.border}`,
                    }}
                >
                    <h1 className="text-2xl font-bold text-center">
                        Create Your Account
                    </h1>

                    {/* Username */}
                    <div className="flex flex-col">
                        <label className="mb-1 font-medium">
                            Username
                        </label>
                        <input
                            name="username"
                            type="text"
                            onChange={handlechange}
                            placeholder="Enter your username"
                            className="p-3 rounded outline-none"
                            style={{
                                background: theme.surface,
                                color: theme.textPrimary,
                                border: `1px solid ${theme.border}`,
                            }}
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                        <label className="mb-1 font-medium">
                            Email
                        </label>
                        <input
                            name="email"
                            type="email"
                            onChange={handlechange}
                            placeholder="Enter your email"
                            className="p-3 rounded outline-none"
                            style={{
                                background: theme.surface,
                                color: theme.textPrimary,
                                border: `1px solid ${theme.border}`,
                            }}
                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col">
                        <label className="mb-1 font-medium">
                            Password
                        </label>
                        <input
                            name="password"
                            type="password"
                            onChange={handlechange}
                            placeholder="Enter your password"
                            className="p-3 rounded outline-none"
                            style={{
                                background: theme.surface,
                                color: theme.textPrimary,
                                border: `1px solid ${theme.border}`,
                            }}
                        />
                    </div>

                    {/* Register */}
                    <button
                        type="submit"
                        className="w-full mt-4 py-3 rounded-xl font-semibold transition-transform hover:scale-105"
                        style={{
                            background: theme.primary,
                            border: `2px solid ${theme.border}`,
                        }}
                    >
                        Register
                    </button>

                    {/* Divider */}
                    <div className="flex items-center gap-2">
                        <div
                            className="flex-1 h-px"
                            style={{ background: theme.border }}
                        />
                        <span
                            className="text-sm"
                            style={{ color: theme.textSecondary }}
                        >
                            OR
                        </span>
                        <div
                            className="flex-1 h-px"
                            style={{ background: theme.border }}
                        />
                    </div>

                    {/* Login */}
                    <button
                        type="button"
                        onClick={() => navigateTo("/login")}
                        className="w-full py-3 rounded-xl font-semibold transition-transform hover:scale-105"
                        style={{
                            background: theme.secondary,
                            border: `2px solid ${theme.border}`,
                        }}
                    >
                        Login
                    </button>
                </div>
            </form>
        </section>
    );
}

export default SignUp;
