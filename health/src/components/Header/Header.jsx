import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const { isLoggedIn, storeTokenInLS, API, LogoutUser } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    LogoutUser();
    navigate("/");
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 shadow z-50">
      <nav className="bg-dark border-gray-900 px-4 lg:px-6 py-1.5 text-white">
        <div className="flex flex-wrap justify-between  items-center mx-1 max-w-screen-xl">
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              {isMobileMenuOpen ? "Close" : "Menu"}
            </button>
          </div>

          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } lg:flex justify-between items-center w-full lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            {isLoggedIn && (
              <div
                className={`${
                  isMobileMenuOpen ? "flex-col" : "flex-row"
                } lg:space-x-5 lg:mt-0 flex mt-4 font-medium justify-center md:grid-cols-2 lg:grid-cols-5 gap-3`}
              >
                <div>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-1 pr-2 pl-1 duration-200 text-sm ${
                        isActive ? "text-orange-700" : "text-light"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Home
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `block py-1 pr-2 pl-1 duration-200 text-sm ${
                        isActive ? "text-orange-700" : "text-white"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    About
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `block py-1 pr-2 pl-1 duration-200 text-sm ${
                        isActive ? "text-orange-700" : "text-white"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Contact
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/medicine-recommendation"
                    className={({ isActive }) =>
                      `block py-1 pr-2 pl-1 duration-200 text-sm ${
                        isActive ? "text-orange-700" : "text-white"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Medicine-Recommendation
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="http://127.0.0.1:8000/#"
                    className={({ isActive }) =>
                      `block py-1 pr-2 pl-1 duration-200 text-sm ${
                        isActive ? "text-orange-700" : "text-white"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    DiseasePredictor
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="http://127.0.0.1:8000/mental/"
                    className={({ isActive }) =>
                      `block py-1 pr-2 pl-1 duration-200 text-sm ${
                        isActive ? "text-orange-700" : "text-white"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    MentalHealthAssessment
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="http://127.0.0.1:8000/skin"
                    className={({ isActive }) =>
                      `block py-1 pr-2 pl-1 duration-200 text-sm ${
                        isActive ? "text-orange-700" : "text-white"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    SkinDiseasePredictor
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="http://127.0.0.1:8000/xray"
                    className={({ isActive }) =>
                      `block py-1 pr-2 pl-1 duration-200 text-sm ${
                        isActive ? "text-orange-700" : "text-light"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Pneumonia-Xray
                  </NavLink>
                </div>
                <div></div>
                <div>
                  <NavLink
                    to="http://127.0.0.1:8000/chatbot/"
                    className={({ isActive }) =>
                      `block py-1 pr-2 pl-1 duration-200 text-sm ${
                        isActive ? "text-orange-700" : "text-white"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    MedicalChatbot
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/search-doctor"
                    className={({ isActive }) =>
                      `block py-1 pr-2 pl-1 duration-200 text-sm ${
                        isActive ? "text-orange-700" : "text-white"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Search Doctor
                  </NavLink>
                </div>
                <button className="btn btn-danger" onClick={handleClick}>
                  Logout
                </button>
              </div>
            )}
            {!isLoggedIn && (
              <div
                className={`${
                  isMobileMenuOpen ? "flex-col" : "flex-row"
                } lg:space-x-5 lg:mt-0 flex mt-4 font-medium justify-center md:grid-cols-2 lg:grid-cols-5 gap-4`}
              >
                <div>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-1 pr-2 pl-1 duration-200 text-sm ${
                        isActive ? "text-orange-700" : "text-light"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Register
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      `block py-1 pr-2 pl-1 duration-200 text-sm ${
                        isActive ? "text-orange-700" : "text-light"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Login
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/registerdoctor"
                    className={({ isActive }) =>
                      `block py-1 pr-2 pl-1 duration-200 text-sm ${
                        isActive ? "text-orange-700" : "text-white"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Register Doctor
                  </NavLink>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
