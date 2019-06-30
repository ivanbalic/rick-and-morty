import React from "react";

import "./Footer.css";

const Footer = () => (
  <footer className="bg-dark text-white py-3">
    <div className="container">
      © {new Date().getFullYear()} Rick&Morty Wiki
    </div>
  </footer>
);

export { Footer };
