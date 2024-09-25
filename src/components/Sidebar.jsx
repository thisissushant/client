import { Link, useLocation } from "react-router-dom";
import {
  FaNewspaper,
  FaChartLine,
  FaBullhorn,
  FaTachometerAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div>
      <div className="w-64 p-4 h-full hidden md:block">
        <nav>
          <ul className="space-y-6">
            <li>
              <Link
                to="/dashboard"
                className={`flex items-center p-2 rounded ${
                  location.pathname === "/dashboard"
                    ? "text-purple-500"
                    : "text-gray-700 hover:text-purple-500"
                }`}
              >
                <FaTachometerAlt
                  className={`mr-3 text-xl ${
                    location.pathname === "/dashboard"
                      ? "text-purple-500"
                      : "text-gray-700"
                  }`}
                />
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                to="/blog"
                className={`flex items-center p-2 rounded ${
                  location.pathname === "/blog"
                    ? "text-purple-500"
                    : "text-gray-700 hover:text-purple-500"
                }`}
              >
                <FaNewspaper
                  className={`mr-3 text-xl ${
                    location.pathname === "/blog"
                      ? "text-purple-500"
                      : "text-gray-700"
                  }`}
                />
                Blog Posts
              </Link>
            </li>

            <li>
              <Link
                to="/finance"
                className={`flex items-center p-2 rounded ${
                  location.pathname === "/finance"
                    ? "text-purple-500"
                    : "text-gray-700 hover:text-purple-500"
                }`}
              >
                <FaChartLine
                  className={`mr-3 text-xl ${
                    location.pathname === "/finance"
                      ? "text-purple-500"
                      : "text-gray-700"
                  }`}
                />
                Finance
              </Link>
            </li>

            <li>
              <Link
                to="/pitches"
                className={`flex items-center p-2 rounded ${
                  location.pathname === "/pitches"
                    ? "text-purple-500"
                    : "text-gray-700 hover:text-purple-500"
                }`}
              >
                <FaBullhorn
                  className={`mr-3 text-xl ${
                    location.pathname === "/pitches"
                      ? "text-purple-500"
                      : "text-gray-700"
                  }`}
                />
                Pitches
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="bg-gray-100 fixed bottom-0 left-0 right-0 md:hidden z-50">
        <nav className="flex justify-around py-2">
          <Link
            to="/dashboard"
            className={`flex flex-col items-center p-2 ${
              location.pathname === "/dashboard"
                ? "text-purple-500"
                : "text-gray-700 hover:text-purple-500"
            }`}
          >
            <FaTachometerAlt className="text-2xl" />
          </Link>

          <Link
            to="/blog"
            className={`flex flex-col items-center p-2 ${
              location.pathname === "/blog"
                ? "text-purple-500"
                : "text-gray-700 hover:text-purple-500"
            }`}
          >
            <FaNewspaper className="text-2xl" />
          </Link>

          <Link
            to="/finance"
            className={`flex flex-col items-center p-2 ${
              location.pathname === "/finance"
                ? "text-purple-500"
                : "text-gray-700 hover:text-purple-500"
            }`}
          >
            <FaChartLine className="text-2xl" />
          </Link>

          <Link
            to="/pitches"
            className={`flex flex-col items-center p-2 ${
              location.pathname === "/pitches"
                ? "text-purple-500"
                : "text-gray-700 hover:text-purple-500"
            }`}
          >
            <FaBullhorn className="text-2xl" />
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
