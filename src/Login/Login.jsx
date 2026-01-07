import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";


const theme = {
    background: "#0f172a",      // page background
    surface: "#020617",         // card background
    primary: "#2563eb",         // login button
    secondary: "#16a34a",       // register button
    border: "#334155",
    textPrimary: "#f8fafc",
    textSecondary: "#94a3b8",
};

function Login() {
    const navigateTo = useNavigate();
    const url = import.meta.env.VITE_HOST_URL;

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    function handlechange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handlesubmit(e) {
        e.preventDefault();

        if (!form.email.trim() || !form.password.trim()) {
            toast.error("All fields are required!");
            return;
        }

        postthedatalogin(form);
    }

    async function postthedatalogin(data) {
        try {
            const response = await axios.post(
                `${url}/api/users/login`,
                data
            );

            if (response.status === 200 || response.status === 201) {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem(
                    "user",
                    JSON.stringify(response.data.user)
                );

                toast.success(
                    `Hello, ${response.data.user.username}`
                );

                setTimeout(() => {
                    navigateTo("/dashboard");
                }, 1000);
            }
        } catch (error) {
            if (error.response) {
                toast.error(
                    error.response.data.message || "Login failed!"
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
                        Login to your Account
                    </h1>

                    {/* Email */}
                    <div className="flex flex-col">
                        <label className="mb-1 font-medium">Email</label>
                        <input
                            name="email"
                            type="text"
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

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full py-3 rounded-xl font-semibold transition-transform hover:scale-105"
                        style={{
                            background: theme.primary,
                            border: `2px solid ${theme.border}`,
                        }}
                    >
                        Login
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

                    {/* Register */}
                    <button
                        type="button"
                        onClick={() => navigateTo("/signup")}
                        className="w-full py-3 rounded-xl font-semibold transition-transform hover:scale-105"
                        style={{
                            background: theme.secondary,
                            border: `2px solid ${theme.border}`,
                        }}
                    >
                        Register
                    </button>
                </div>
            </form>
        </section>
    );
}

export default Login;
