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
    event.stopPropagation(); // This prevents the event from bubbling up

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

  const handleMenuClick = (event) => {
    // Don't close the menu if clicking on a dropdown toggle or link that should navigate
    if (event) {
      event.stopPropagation();
    }
    // Reset all states when closing the menu
    setIsActive({
      services: false,
      resources: false,
      digital: false,
      business: false,
    });
    handleMobileMenu(); // Call the provided handleMobileMenu function
  };

  // Handle link clicks without closing the mobile menu overlay
  const handleLinkClick = (event) => {
    event.stopPropagation();
    // Close the mobile menu after navigation
    setTimeout(() => {
      handleMenuClick();
    }, 100);
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
        <li className="active">
          <Link href="/" onClick={handleLinkClick}>Home</Link>
        </li>
        <li>
          <Link href="/about" onClick={handleLinkClick}>About Us</Link>
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
                <li>
                  <Link href="/services-details/proptech" onClick={handleLinkClick}>PropTech</Link>
                </li>
                <li>
                  <Link href="/services-details/artificial-intelligence" onClick={handleLinkClick}>
                    Artificial Intelligence
                  </Link>
                </li>
                <li>
                  <Link href="/services-details/business-process-automation" onClick={handleLinkClick}>
                    Business Process Automation
                  </Link>
                </li>
              </ul>
              <div
                className={
                  isActive.digital ? "dropdown-btn open" : "dropdown-btn"
                }
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleToggle("digital", e);
                }}
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
                <li>
                  <Link href="/services-details/real-estate-valuation" onClick={handleLinkClick}>
                    Real Estate Valuation
                  </Link>
                </li>
                <li>
                  <Link href="/services-details/accounting-finance" onClick={handleLinkClick}>
                    Accounting & Finance
                  </Link>
                </li>
                <li>
                  <Link href="/services-details/engineering-services" onClick={handleLinkClick}>
                    Engineering Services
                  </Link>
                </li>
                <li>
                  <Link href="/services-details/digital-marketing" onClick={handleLinkClick}>
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/services-details/qa-valuation-processing" onClick={handleLinkClick}>
                    QA Valuation Processing
                  </Link>
                </li>
                <li>
                  <Link href="/services-details/b2b_bpo_valuation" onClick={handleLinkClick}>
                    B2B BPO Valuation
                  </Link>
                </li>
              </ul>
              <div
                className={
                  isActive.business ? "dropdown-btn open" : "dropdown-btn"
                }
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleToggle("business", e);
                }}
              >
                <span className="plus-line" />
              </div>
            </li>
          </ul>
          <div
            className={isActive.services ? "dropdown-btn open" : "dropdown-btn"}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleToggle("services", e);
            }}
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
            <li>
              <Link href="/case-study" onClick={handleLinkClick}>Case Study</Link>
            </li>
            <li>
              <Link href="/blog" onClick={handleLinkClick}>Blogs</Link>
            </li>
          </ul>
          <div
            className={
              isActive.resources ? "dropdown-btn open" : "dropdown-btn"
            }
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleToggle("resources", e);
            }}
          >
            <span className="plus-line" />
          </div>
        </li>
        <li>
          <Link href="/contact" onClick={handleLinkClick}>Contact Us</Link>
        </li>
      </ul>
    </>
  );
}