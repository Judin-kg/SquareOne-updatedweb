import React, { useState } from "react";
import "./Navbar.css";
import { IonIcon } from "@ionic/react";
import {
  homeOutline,
  bookOutline,
  bagHandleOutline,
  callOutline,
} from "ionicons/icons";
import { Link } from "react-scroll";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    { name: "Home", icon: homeOutline, id: "home" },
    { name: "About", icon: bookOutline, id: "about" },
    { name: "Products", icon: bagHandleOutline, id: "products" },
    { name: "Contact", icon: callOutline, id: "contact" },
  ];

  return (
    <div className="navbar-container">
      {/* Logo */}
      <div className="logo">
        <img src="/SQUARE_ONE-removebg-preview.png" alt="Logo" className="logo-img" />
      </div>

      {/* Navigation */}
      <div className="navigation">
        <ul>
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`list ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              <Link
                to={item.id}
                smooth={true}
                duration={600}
                offset={-80} // adjust for fixed navbar height
              >
                <span className="icon">
                  <IonIcon icon={item.icon} />
                </span>
                <span className="text">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
