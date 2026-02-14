import { useEffect, useState, useContext } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import UserEditModal from "../components/UserEditModal";

const AdminDashboard = () => {
    const { user } = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            if (user?.role === "admin") {
                try {
                    const { data } = await api.get("/api/admin/users");
                    setUsers(data.data);
                } catch {
                    toast.error("Failed to load users");
                }
            }
        };
        fetchUsers();
    }, [user]);

    const handleUserUpdated = (updatedUser) => {
        setUsers((prev) =>
            prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
        );
    };

    if (!user) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
                <p className="text-xl animate-pulse">Please login to continue...</p>
            </div>
        );
    }

    if (user.role !== "admin") {
        return (
            <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
                <p className="text-xl font-semibold">🚫 Access denied. Admins only.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-900 via-indigo-900 to-purple-900 text-white flex flex-col items-center py-16 px-6">
            {/* Hero Section */}
            <div className="text-center mb-12 animate-fadeIn">
                <h1 className="text-5xl font-extrabold mb-4">Admin Dashboard</h1>
                <p className="text-lg text-gray-300">
                    Manage users, roles, and subscriptions with full control
                </p>
            </div>

            {/* Users Table */}
            <div className="bg-white text-gray-900 rounded-xl shadow-2xl p-8 w-full max-w-5xl animate-slideUp">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-indigo-100 text-indigo-900">
                            <th className="border p-3 text-left">Name</th>
                            <th className="border p-3 text-left">Email</th>
                            <th className="border p-3 text-left">Plan</th>
                            <th className="border p-3 text-left">Role</th>
                            <th className="border p-3 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((u) => (
                            <tr
                                key={u.id}
                                className="hover:bg-indigo-50 transition duration-200"
                            >
                                <td className="border p-3">{u.name}</td>
                                <td className="border p-3">{u.email}</td>
                                <td className="border p-3">
                                    <span
                                        className={`px-2 py-1 rounded text-sm ${u.plan === "pro"
                                            ? "bg-green-200 text-green-800"
                                            : "bg-yellow-200 text-yellow-800"
                                            }`}
                                    >
                                        {u.plan}
                                    </span>
                                </td>
                                <td className="border p-3">
                                    <span
                                        className={`px-2 py-1 rounded text-sm ${u.role === "admin"
                                            ? "bg-blue-200 text-blue-800"
                                            : "bg-gray-200 text-gray-800"
                                            }`}
                                    >
                                        {u.role}
                                    </span>
                                </td>
                                <td className="border p-3 text-center">
                                    <button
                                        onClick={() => setEditingUser(u)}
                                        className="bg-indigo-600 text-white px-3 py-1 rounded mr-2 hover:bg-indigo-700 transition transform hover:scale-105"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={async () => {
                                            try {
                                                await api.delete(`/api/admin/users/${u.id}`);
                                                toast.success("User deleted");
                                                setUsers(users.filter((usr) => usr.id !== u.id));
                                            } catch {
                                                toast.error("Failed to delete user");
                                            }
                                        }}
                                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition transform hover:scale-105"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {editingUser && (
                <UserEditModal
                    user={editingUser}
                    onClose={() => setEditingUser(null)}
                    onUpdated={handleUserUpdated}
                />
            )}
        </div>
    );
};

export default AdminDashboard;
