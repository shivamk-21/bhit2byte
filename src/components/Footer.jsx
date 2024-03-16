import React from "react";

const Footer = () => {
  const handleContactUsClick = () => {
    const emailAddress = "shivaibhav21102@iiitnr.edu.in";

    // Construct the mailto URL with just the email address
    const mailtoURL = `mailto:${encodeURIComponent(emailAddress)}`;

    // Open the default email client
    window.location.href = mailtoURL;
  };

  const handleBackToTopClick = () => {
    console.log("Back to Top clicked");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer">
      <h2 onClick={handleContactUsClick}>Contact Us</h2>
      <h3 onClick={handleBackToTopClick}>Back to Top</h3>
    </div>
  );
};

export default Footer;
