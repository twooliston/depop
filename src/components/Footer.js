import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Footer = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 950;

  let pages = [
    ["/contact", "Contact"],
    ["/faqs", "FAQs"],
    ["/sustainability", "Sustainability"],
    ["/privacy-policy", "Privacy Policy"],
    ["/terms-and-conditions", "Terms & Conditions"],
  ];

  let contact = ["/contact", "Contact"];
  let faqs = ["/faqs", "FAQs"];
  let sustainability = ["/sustainability", "Sustainability"];
  let privacy = ["/privacy-policy", "Privacy Policy"];
  let tac = ["/terms-and-conditions", "Terms & Conditions"];

  return (
    <footer>
      {isMobile ? (
        <nav>
          <ul>
            {/* <hr size="1" width="100%" color="#3e4148" /> */}
            <h3>Need Help?</h3>
            <div>
              <li>
                <Link to={contact[0]}>{contact[1]}</Link>
              </li>
              <li>
                <Link to={faqs[0]}>{faqs[1]}</Link>
              </li>
            </div>
            <hr size="1" width="65%" color="#3e4148" />
            <h3>Our Choices</h3>
            <div>
              <li>
                <Link to={sustainability[0]}>{sustainability[1]}</Link>
              </li>
              <li>
                <Link to={privacy[0]}>{privacy[1]}</Link>
              </li>
              <li>
                <Link to={tac[0]}>{tac[1]}</Link>
              </li>
            </div>
            {/* <hr size="1" width="100%" color="#3e4148" /> */}
          </ul>
        </nav>
      ) : (
        <Navbar pages={pages} />
      )}
    </footer>
  );
};

export default Footer;
