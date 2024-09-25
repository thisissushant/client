import {} from "react";
import { Link } from "react-router-dom";
import {
  FaNewspaper,
  FaChartLine,
  FaBullhorn,
  FaTachometerAlt,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-gray-100 w-64 p-4 h-full">
      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              to="/dashboard"
              className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded"
            >
              <FaTachometerAlt className="mr-3" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded"
            >
              <FaNewspaper className="mr-3" />
              Blog Posts
            </Link>
          </li>
          <li>
            <Link
              to="/finance"
              className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded"
            >
              <FaChartLine className="mr-3" />
              Finance
            </Link>
          </li>
          <li>
            <Link
              to="/pitches"
              className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded"
            >
              <FaBullhorn className="mr-3" />
              Pitches
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
