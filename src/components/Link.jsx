// Link.jsx
import React, { useEffect } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

const Link = ({ to, children, ...props }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (event) => {
    if (to === "#aboutUs") {
      event.preventDefault();
      if (location.pathname !== "/") {
        navigate("/", { replace: true });
        setTimeout(() => {
          window.location.hash = "aboutUs";
        }, 0);
      } else {
        window.location.hash = "aboutUs";
      }
    }
  };

  useEffect(() => {
    if (location.hash === "#aboutUs") {
      const element = document.getElementById("aboutUs");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.pathname, location.hash]);

  return (
    <RouterLink
      to={to}
      onClick={to === "#aboutUs" ? handleClick : undefined}
      {...props}
    >
      {children}
    </RouterLink>
  );
};

export default Link;
