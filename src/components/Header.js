import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./Header.module.css";

export const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("Home");
    } else if (location.pathname === "/add") {
      setActiveTab("AddContact");
    } else if (location.pathname === "/about") {
      setActiveTab("About");
    }
  }, [location]);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">
        Contact <span>App</span>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link
              to="/"
              className={`${activeTab === "Home" ? classes.active : classes.inactive}`}
              onClick={() => setActiveTab("Home")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/add"
              className={`${activeTab === "AddContact" ? classes.active : classes.inactive}`}
              onClick={() => setActiveTab("AddContact")}
            >
              Add Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
