import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import logoOpen from "../assets/logo_open.png";

export function SiteHeader() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const showBrandText = pathname !== "/";
  const hiddenMobileNav = isMobileMenu && !isMenuOpen;

  useEffect(() => {
    let animationFrame = 0;

    const updateScrolledState = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        const nextScrolledState = window.scrollY > 80;
        setIsScrolled((currentScrolledState) =>
          currentScrolledState === nextScrolledState
            ? currentScrolledState
            : nextScrolledState,
        );
      });
    };

    updateScrolledState();
    window.addEventListener("scroll", updateScrolledState, { passive: true });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateScrolledState);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    const updateMenuMode = () => {
      setIsMobileMenu(mediaQuery.matches);
    };

    updateMenuMode();
    mediaQuery.addEventListener("change", updateMenuMode);

    return () => {
      mediaQuery.removeEventListener("change", updateMenuMode);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);

    const scroll = () => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    if (pathname !== "/") {
      navigate("/");
      window.setTimeout(scroll, 50);
      return;
    }

    scroll();
  };

  const scrollToProjects = () => {
    scrollToSection("projects");
  };

  const scrollToContact = () => {
    scrollToSection("contact");
  };

  return (
    <header
      className={`site-header${isScrolled ? " is-scrolled" : ""}${
        isMenuOpen ? " menu-open" : ""
      }`}
    >
      <div className="site-header-inner">
        <Link
          className="brand"
          to="/"
          aria-label="Zoey Kourianos home"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="brand-logo" aria-hidden="true">
            <img
              className="brand-logo-image brand-logo-closed"
              src={logo}
              alt=""
            />
            <img
              className="brand-logo-image brand-logo-open"
              src={logoOpen}
              alt=""
            />
          </span>
          {showBrandText ? (
            <span>
              <span className="brand-name">Zoey Kourianos</span>
              <span className="brand-role">UX/UI Designer</span>
            </span>
          ) : null}
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        <nav
          className="nav-links"
          id="primary-navigation"
          aria-label="Primary navigation"
          aria-hidden={hiddenMobileNav}
        >
          <NavLink
            to="/about"
            tabIndex={hiddenMobileNav ? -1 : undefined}
            onClick={() => setIsMenuOpen(false)}
          >
            About Me
          </NavLink>
          <button
            type="button"
            tabIndex={hiddenMobileNav ? -1 : undefined}
            onClick={scrollToProjects}
          >
            Projects
          </button>
          <button
            type="button"
            tabIndex={hiddenMobileNav ? -1 : undefined}
            onClick={scrollToContact}
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}
