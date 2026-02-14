import { useState, useContext } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

const Subscription = () => {
  const [plan, setPlan] = useState("pro");
  const { fetchProfile } = useContext(AuthContext);

  const handleChangePlan = async () => {
    try {
      const { data } = await api.put("/api/subscriptions/change", { plan });
      toast.success(`Plan changed to ${data.data.plan}`);
      await fetchProfile(); // refresh context user
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to change plan");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600 flex flex-col items-center justify-center px-6">
      {/* Hero Section */}
      <div className="text-center mb-12 animate-fadeIn">
        <h1 className="text-5xl font-extrabold text-white mb-4">Manage Subscription</h1>
        <p className="text-lg text-gray-200">
          Upgrade or downgrade your plan anytime to fit your needs
        </p>
      </div>

      {/* Subscription Card */}
      <div className="bg-white text-gray-900 rounded-xl shadow-2xl p-8 w-full max-w-md transform transition duration-500 hover:scale-105 hover:shadow-indigo-500/50 animate-slideUp">
        <h2 className="text-2xl font-bold mb-6 text-center">Choose Your Plan</h2>
        <select
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
          className="w-full border p-3 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        >
          <option value="free">Free</option>
          <option value="pro">Pro</option>
        </select>
        <button
          onClick={handleChangePlan}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition transform hover:scale-105"
        >
          Change Plan
        </button>
      </div>

      {/* Feature Highlights */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl animate-fadeIn">
        <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6 hover:shadow-indigo-400 transition">
          <h3 className="text-xl font-bold mb-2">💡 Free Plan</h3>
          <p className="text-gray-600">
            Basic access to core features. Perfect for trying out the platform.
          </p>
        </div>
        <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6 hover:shadow-indigo-400 transition">
          <h3 className="text-xl font-bold mb-2">🚀 Pro Plan</h3>
          <p className="text-gray-600">
            Unlock premium features, faster performance, and priority support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
