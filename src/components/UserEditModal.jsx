import { useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

const UserEditModal = ({ user, onClose, onUpdated }) => {
    const [form, setForm] = useState({
        name: user.name,
        email: user.email,
        plan: user.plan,
        role: user.role,
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await api.put(`/api/admin/users/${user.id}`, form);
            toast.success("User updated successfully");
            onUpdated(data.data);
            onClose();
        } catch (err) {
            toast.error(err.response?.data?.message || "Failed to update user");
        }
    };

    return (
        <div className="fixed inset-0 bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600 bg-opacity-90 flex items-center justify-center z-50 animate-fadeIn">
            <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md transform transition duration-500 hover:scale-105 animate-slideUp">
                <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">
                    ✏️ Edit User
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition text-gray-900"
                        placeholder="Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition text-gray-900"
                        placeholder="Email"
                        required
                    />
                    <select
                        name="plan"
                        value={form.plan}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition text-gray-900"
                    >
                        <option value="free">Free</option>
                        <option value="pro">Pro</option>
                    </select>
                    <select
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition text-gray-900"
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                    <div className="flex justify-end space-x-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition transform hover:scale-105"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default UserEditModal;
