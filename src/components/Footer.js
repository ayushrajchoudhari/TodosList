import React from "react";

const Footer = () => {
  let footerStyles = {
    width: "100%",
    position: "absolute",
    top: "100%",
    // bottom: "0px"
  }


  return (
    <footer className="bg-dark text-light py-5" style={footerStyles}>
      <p className="text-center">
        Copyright &copy; Todos List | theayushraj.com
      </p>
    </footer>
  );
};

export default Footer;
