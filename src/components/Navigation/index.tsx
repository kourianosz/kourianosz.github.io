import { motion } from "motion/react";
import { NavLink } from "react-router-dom";
import "./index.css";
const links = [
  { to: "/", label: "Home", end: true },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About", end: true },
];
export default function Navigation() {
  return (
    <nav className="navigation" aria-label="Primary">
      <ul>
        {links.map(({ to, label, end }) => (
          <li key={to}>
            <NavLink to={to} end={end}>
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      className="navigation__pill"
                      layoutId="navigation-pill"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                  <span className="navigation__label">{label}</span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
