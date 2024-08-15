import React from "react";

const Footer = () => {
  return (
    <div className="py-16 px-32 h-auto w-full bg-gradient-to-b from-gray-200 via-gray-100 to-gray-50 flex justify-between">
      <div>
        <h3 className="text-xl">Contact us</h3>
        <div className="py-4 flex space-x-4">
          <a href="https://www.instagram.com" target="_blank">
            <i className="fab fa-instagram" />
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <i className="fab fa-twitter" />
          </a>
          <a href="https://www.facebook.com" target="_blank">
            <i className="fab fa-facebook-f" />
          </a>
        </div>
        <h3 className="text-xl">FAQ</h3>
        <h3 className="text-xl">Pricing Plans</h3>
        <h3 className="text-xl">Terms and Conditions</h3>
      </div>
      <div>
        <h3 className="text-xl">Map</h3>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6277503943566!2d77.03587817457195!3d28.610942185062445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05dd375e5a13%3A0x108adaa3abe4bd07!2sNetaji%20Subhas%20University%20of%20Technology!5e0!3m2!1sen!2sin!4v1723712483791!5m2!1sen!2sin"
            width="450"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;
