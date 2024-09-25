import {} from "react";
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
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          BlogApp
        </Link>
        {isAuthenticated && user && (
          <div className="flex items-center">
            <div className="mr-4 text-right">
              <p className="text-sm font-medium text-gray-700">
                {user.username}
              </p>
              <button
                onClick={handleLogout}
                className="text-xs text-red-500 hover:text-red-700"
              >
                Logout
              </button>
            </div>
            <FaUserCircle className="text-gray-500 text-3xl" />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
