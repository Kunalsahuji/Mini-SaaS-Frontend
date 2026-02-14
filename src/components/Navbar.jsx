import { NavLink, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const baseClasses =
        "px-3 py-2 rounded-md text-sm font-medium transition duration-200";
    const activeClasses =
        "bg-indigo-700 text-white shadow-md";
    const inactiveClasses =
        "text-gray-200 hover:bg-indigo-600 hover:text-white";

    return (
        <nav className="bg-linear-to-r from-gray-900 via-indigo-900 to-purple-900 shadow-lg fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <div className="shrink-0 flex items-center">
                        <Link
                            to="/"
                            className="text-white font-extrabold text-xl tracking-wide hover:text-indigo-300 transition"
                        >
                            Mini SaaS
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex md:space-x-4 items-center">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
                            }
                        >
                            Home
                        </NavLink>
                        {!user && (
                            <>
                                <NavLink
                                    to="/register"
                                    className={({ isActive }) =>
                                        `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
                                    }
                                >
                                    Register
                                </NavLink>
                                <NavLink
                                    to="/login"
                                    className={({ isActive }) =>
                                        `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
                                    }
                                >
                                    Login
                                </NavLink>
                            </>
                        )}
                        {user && (
                            <>
                                <NavLink
                                    to="/profile"
                                    className={({ isActive }) =>
                                        `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
                                    }
                                >
                                    Profile
                                </NavLink>
                                <NavLink
                                    to="/subscription"
                                    className={({ isActive }) =>
                                        `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
                                    }
                                >
                                    Subscription
                                </NavLink>
                                {user.role === "admin" && (
                                    <NavLink
                                        to="/admin"
                                        className={({ isActive }) =>
                                            `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
                                        }
                                    >
                                        Admin
                                    </NavLink>
                                )}
                                <button
                                    onClick={logout}
                                    className="ml-4 bg-red-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-red-600 transition transform hover:scale-105"
                                >
                                    Logout
                                </button>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-white focus:outline-none focus:ring-2 focus:ring-white"
                        >
                            {isOpen ? "✖" : "☰"}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-indigo-800 px-2 pt-2 pb-3 space-y-1">
                    <NavLink
                        to="/"
                        onClick={toggleMenu}
                        className={({ isActive }) =>
                            `${baseClasses} block ${isActive ? activeClasses : inactiveClasses}`
                        }
                    >
                        Home
                    </NavLink>
                    {!user && (
                        <>
                            <NavLink
                                to="/register"
                                onClick={toggleMenu}
                                className={({ isActive }) =>
                                    `${baseClasses} block ${isActive ? activeClasses : inactiveClasses}`
                                }
                            >
                                Register
                            </NavLink>
                            <NavLink
                                to="/login"
                                onClick={toggleMenu}
                                className={({ isActive }) =>
                                    `${baseClasses} block ${isActive ? activeClasses : inactiveClasses}`
                                }
                            >
                                Login
                            </NavLink>
                        </>
                    )}
                    {user && (
                        <>
                            <NavLink
                                to="/profile"
                                onClick={toggleMenu}
                                className={({ isActive }) =>
                                    `${baseClasses} block ${isActive ? activeClasses : inactiveClasses}`
                                }
                            >
                                Profile
                            </NavLink>
                            <NavLink
                                to="/subscription"
                                onClick={toggleMenu}
                                className={({ isActive }) =>
                                    `${baseClasses} block ${isActive ? activeClasses : inactiveClasses}`
                                }
                            >
                                Subscription
                            </NavLink>
                            {user.role === "admin" && (
                                <NavLink
                                    to="/admin"
                                    onClick={toggleMenu}
                                    className={({ isActive }) =>
                                        `${baseClasses} block ${isActive ? activeClasses : inactiveClasses}`
                                    }
                                >
                                    Admin
                                </NavLink>
                            )}
                            <button
                                onClick={() => {
                                    logout();
                                    toggleMenu();
                                }}
                                className="w-full bg-red-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-red-600 transition"
                            >
                                Logout
                            </button>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
