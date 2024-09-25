import {} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import BlogPage from "./pages/BlogPage";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex flex-1 flex-col sm:flex-row">
            <div className="hidden sm:block">
              <Sidebar />
            </div>
            <main className="flex-1 p-4 bg-gray-50">
              <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route
                  path="/blog"
                  element={
                    <PrivateRoute>
                      <BlogPage />
                    </PrivateRoute>
                  }
                />
                <Route path="/" element={<Navigate to="/blog" />} />
              </Routes>
            </main>
            <div className="sm:hidden">
              <Sidebar />
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
