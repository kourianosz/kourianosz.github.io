import logo from "../assets/logo.png";
import logoOpen from "../assets/logo_open.png";

const navItems = [
  { href: "#about", label: "About Me" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Zoey Kourianos home">
        <span className="brand-logo" aria-hidden="true">
          <img className="brand-logo-image brand-logo-closed" src={logo} alt="" />
          <img className="brand-logo-image brand-logo-open" src={logoOpen} alt="" />
        </span>
        <span>
          <span className="brand-name">Zoey Kourianos</span>
          <span className="brand-role">UX/UI Designer</span>
        </span>
      </a>

      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
