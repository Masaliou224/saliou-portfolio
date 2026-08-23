import React from "react";
import { NavLink } from "react-router-dom";

const tabs = [
  { to: "/about", label: "about" },
  { to: "/skills", label: "skills" },
  { to: "/experience", label: "experience" },
  { to: "/projects", label: "projects" },
  { to: "/contact", label: "contact" },
];

const TopNav = () => {
  return (
    <nav className="hidden lg:flex sticky top-0 z-20 gap-0.5 overflow-x-auto no-scrollbar bg-surface border-b border-line px-2">
      {tabs.map((tab) => (
        <NavLink
          key={tab.to}
          to={tab.to}
          className={({ isActive }) =>
            `flex items-center gap-2 px-[18px] py-[13px] font-mono text-xs whitespace-nowrap border-r border-line-soft relative ${
              isActive ? "text-mist bg-ink" : "text-mist-faint hover:text-mist"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isActive ? "bg-accent" : "bg-current opacity-50"
                }`}
              />
              {tab.label}
              {isActive && (
                <span className="absolute left-0 right-0 -bottom-px h-0.5 bg-accent" />
              )}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default TopNav;