import Link from "next/link";
import { useEffect, useState } from "react";

export default function MobileMenu({ handleMobileMenu }) {
  const [isActive, setIsActive] = useState({
    services: false,
    resources: false,
    digital: false,
    business: false,
  });

  const handleToggle = (key, event) => {
    event.preventDefault();
    event.stopPropagation();

    // If 'services' or 'resources' is clicked, close the other
    if (key === "services" || key === "resources") {
      setIsActive((prevState) => ({
        services: key === "services" ? !prevState.services : false,
        resources: key === "resources" ? !prevState.resources : false,
        digital: false, // Reset child menus
        business: false,
      }));
    } else {
      // If 'digital' or 'business' is clicked, only toggle them
      setIsActive((prevState) => ({
        ...prevState,
        [key]: !prevState[key],
      }));
    }
  };

  const handleMenuClick = () => {
    // Reset all states when closing the menu
    setIsActive({
      services: false,
      resources: false,
      digital: false,
      business: false,
    });
    handleMobileMenu(); // Call the provided handleMobileMenu function
  };

  useEffect(() => {
    const checkVisibility = () => {
      // Check if the parent element has the class 'mobile-menu-visible'
      const isMenuVisible = document.body.classList.contains(
        "mobile-menu-visible",
      );

      // If 'mobile-menu-visible' class is missing, reset states
      if (!isMenuVisible) {
        setIsActive({
          services: false,
          resources: false,
          digital: false,
          business: false,
        });
      }
    };

    // Run on initial mount and on every menu open/close
    checkVisibility();

    // Listen to DOM changes in case the class is dynamically added/removed
    const observer = new MutationObserver(checkVisibility);
    observer.observe(document.body, { attributes: true, subtree: true });

    // Clean up observer on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ul className="navigation">
        <li className="active" onClick={handleMenuClick}>
          <Link href="/">Home</Link>
        </li>
        <li onClick={handleMenuClick}>
          <Link href="/about">About Us</Link>
        </li>
        <li
          className={`menu-item-has-children ${isActive.services ? "open" : ""}`}
        >
          <Link href="#" onClick={(e) => handleToggle("services", e)}>
            Services
          </Link>
          {/* Use both className and inline style */}
          <ul
            className={`sub-menu ${isActive.services ? "open" : ""}`}
            style={{
              display: isActive.services ? "block" : "none",
            }}
          >
            <li
              className={`menu-item-has-children ${isActive.digital ? "open" : ""}`}
            >
              <Link href="#" onClick={(e) => handleToggle("digital", e)}>
                Digital Solutions
              </Link>
              <ul
                className={`sub-menu ${isActive.digital ? "open" : ""}`}
                style={{
                  display: isActive.digital ? "block" : "none",
                }}
              >
                <li onClick={handleMenuClick}>
                  <Link href="/services-details/proptech">PropTech</Link>
                </li>
                <li onClick={handleMenuClick}>
                  <Link href="/services-details/artificial-intelligence">
                    Artificial Intelligence
                  </Link>
                </li>
                <li onClick={handleMenuClick}>
                  <Link href="/services-details/business-process-automation">
                    Business Process Automation
                  </Link>
                </li>
              </ul>
              <div
                className={
                  isActive.digital ? "dropdown-btn open" : "dropdown-btn"
                }
                onClick={(e) => handleToggle("digital", e)}
              >
                <span className="plus-line" />
              </div>
            </li>
            <li
              className={`menu-item-has-children ${isActive.business ? "open" : ""}`}
            >
              <Link href="#" onClick={(e) => handleToggle("business", e)}>
                Business Consulting
              </Link>
              <ul
                className={`sub-menu ${isActive.business ? "open" : ""}`}
                style={{
                  display: isActive.business ? "block" : "none",
                }}
              >
                <li onClick={handleMenuClick}>
                  <Link href="/services-details/real-estate-valuation">
                    Real Estate Valuation
                  </Link>
                </li>
                <li onClick={handleMenuClick}>
                  <Link href="/services-details/accounting-finance">
                    Accounting & Finance
                  </Link>
                </li>
                <li onClick={handleMenuClick}>
                  <Link href="/services-details/engineering-services">
                    Engineering Services
                  </Link>
                </li>
                <li onClick={handleMenuClick}>
                  <Link href="/services-details/digital-marketing">
                    Digital Marketing
                  </Link>
                </li>
                <li onClick={handleMenuClick}>
                  <Link href="/services-details/qa-valuation-processing">
                    QA Valuation Processing
                  </Link>
                </li>
              </ul>
              <div
                className={
                  isActive.business ? "dropdown-btn open" : "dropdown-btn"
                }
                onClick={(e) => handleToggle("business", e)}
              >
                <span className="plus-line" />
              </div>
            </li>
          </ul>
          <div
            className={isActive.services ? "dropdown-btn open" : "dropdown-btn"}
            onClick={(e) => handleToggle("services", e)}
          >
            <span className="plus-line" />
          </div>
        </li>
        <li
          className={`menu-item-has-children ${isActive.resources ? "open" : ""}`}
        >
          <Link href="#" onClick={(e) => handleToggle("resources", e)}>
            Resources
          </Link>
          <ul
            className={`sub-menu ${isActive.resources ? "open" : ""}`}
            style={{
              display: isActive.resources ? "block" : "none",
            }}
          >
            <li onClick={handleMenuClick}>
              <Link href="/case-study">Case Study</Link>
            </li>
            <li onClick={handleMenuClick}>
              <Link href="/blog">Blogs</Link>
            </li>
          </ul>
          <div
            className={
              isActive.resources ? "dropdown-btn open" : "dropdown-btn"
            }
            onClick={(e) => handleToggle("resources", e)}
          >
            <span className="plus-line" />
          </div>
        </li>
        <li onClick={handleMenuClick}>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
    </>
  );
}
