import { useEffect, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

const Profile = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const { data } = await api.get("/api/users/profile");
                setProfile(data.user);
            } catch (err) {
                toast.error("Failed to load profile");
            }
        };
        fetchProfile();
    }, []);

    if (!profile) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
                <p className="text-xl animate-pulse">Loading your profile...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-900 via-indigo-900 to-purple-900 text-white flex flex-col items-center py-16 px-6">
            {/* Hero Section */}
            <div className="text-center mb-12 animate-fadeIn">
                <h1 className="text-5xl font-extrabold mb-4">Your Profile</h1>
                <p className="text-lg text-gray-300">
                    Manage your account details and subscription plan
                </p>
            </div>

            {/* Profile Card */}
            <div className="bg-white text-gray-900 rounded-xl shadow-2xl p-8 w-full max-w-md transform transition duration-500 hover:scale-105 hover:shadow-indigo-500/50 animate-slideUp">
                <h2 className="text-2xl font-bold mb-6 text-center">Account Details</h2>
                <div className="space-y-3">
                    <p>
                        <span className="font-semibold">Name:</span> {profile.name}
                    </p>
                    <p>
                        <span className="font-semibold">Email:</span> {profile.email}
                    </p>
                    <p>
                        <span className="font-semibold">Plan:</span>
                        <span
                            className={`ml-2 px-2 py-1 rounded text-sm ${profile.plan === "pro"
                                    ? "bg-green-200 text-green-800"
                                    : "bg-yellow-200 text-yellow-800"
                                }`}
                        >
                            {profile.plan}
                        </span>
                    </p>
                </div>
            </div>

            {/* Feature Highlights */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl animate-fadeIn">
                <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6 hover:shadow-indigo-400 transition">
                    <h3 className="text-xl font-bold mb-2">📈 Upgrade Options</h3>
                    <p className="text-gray-600">
                        Explore available subscription plans and unlock premium features.
                    </p>
                </div>
                <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6 hover:shadow-indigo-400 transition">
                    <h3 className="text-xl font-bold mb-2">⚙️ Account Settings</h3>
                    <p className="text-gray-600">
                        Update your profile details and manage your preferences easily.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
