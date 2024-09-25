import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/authSlice";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand Logo */}
        <Link to="/" className="text-3xl font-bold text-purple-500">
          Blog Application
        </Link>

        {/* User Info and Logout Button */}
        {isAuthenticated && user && (
          <div className="flex items-center space-x-4">
            {/* User Icon (Avatar) */}
            <FaUserCircle className="text-purple-800 text-4xl" />

            <div className="text-left">
              <p className="text-lg font-semibold text-gray-800">
                {user.username}
              </p>

              <button
                onClick={handleLogout}
                className="mt-1 inline-block px-4 py-1 text-xs font-medium text-red-500 border border-red-500 rounded hover:bg-red-100 transition duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
