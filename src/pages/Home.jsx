import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
    const { user } = useContext(AuthContext);

    if (!user) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
                <h1 className="text-4xl font-bold mb-4 animate-fadeIn">Welcome to Mini SaaS</h1>
                <p className="text-lg mb-6 animate-slideUp">Please register or login to continue.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-900 via-indigo-900 to-purple-900 text-white flex flex-col items-center py-16 px-6">
            {/* Hero Section */}
            <div className="text-center mb-12 animate-fadeIn">
                <h1 className="text-5xl font-extrabold mb-4">Welcome back, {user.name}!</h1>
                <p className="text-lg text-gray-300">
                    Your personalized SaaS dashboard is ready. Explore your plan, profile, and subscription.
                </p>
            </div>

            {/* User Info Card */}
            <div className="bg-white text-gray-900 rounded-xl shadow-2xl p-8 w-full max-w-md transform transition duration-500 hover:scale-105 hover:shadow-indigo-500/50 animate-slideUp">
                <h2 className="text-2xl font-bold mb-6 text-center">Your Account</h2>
                <div className="space-y-3">
                    <p><span className="font-semibold">Name:</span> {user.name}</p>
                    <p><span className="font-semibold">Email:</span> {user.email}</p>
                    <p><span className="font-semibold">Plan:</span>
                        <span className={`ml-2 px-2 py-1 rounded text-sm 
              ${user.plan === "pro" ? "bg-green-200 text-green-800" : "bg-yellow-200 text-yellow-800"}`}>
                            {user.plan}
                        </span>
                    </p>
                    <p><span className="font-semibold">Role:</span>
                        <span className={`ml-2 px-2 py-1 rounded text-sm 
              ${user.role === "admin" ? "bg-blue-200 text-blue-800" : "bg-gray-200 text-gray-800"}`}>
                            {user.role}
                        </span>
                    </p>
                </div>
            </div>

            {/* Feature Highlights */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl animate-fadeIn">
                <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6 hover:shadow-indigo-400 transition">
                    <h3 className="text-xl font-bold mb-2">🔒 Secure Access</h3>
                    <p className="text-gray-600">Your data is protected with role-based access control and modern authentication.</p>
                </div>
                <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6 hover:shadow-indigo-400 transition">
                    <h3 className="text-xl font-bold mb-2">⚡ Fast Performance</h3>
                    <p className="text-gray-600">Optimized backend and frontend workflows ensure smooth and scalable usage.</p>
                </div>
                <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6 hover:shadow-indigo-400 transition">
                    <h3 className="text-xl font-bold mb-2">📊 Subscription Insights</h3>
                    <p className="text-gray-600">Track your plan and manage upgrades seamlessly from your dashboard.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
