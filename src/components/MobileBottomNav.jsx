import React from "react";
import { NavLink } from "react-router-dom";
import { User, Code2, Briefcase, FolderGit2, Mail } from "lucide-react";

const items = [
  { to: "/about", label: "about", icon: User },
  { to: "/skills", label: "skills", icon: Code2 },
  { to: "/experience", label: "experience", icon: Briefcase },
  { to: "/projects", label: "projects", icon: FolderGit2 },
  { to: "/contact", label: "contact", icon: Mail },
];

const MobileBottomNav = () => {
  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-surface border-t border-line flex justify-around"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {items.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 py-2.5 flex-1 font-mono text-[10px] ${
              isActive ? "text-accent" : "text-mist-faint"
            }`
          }
        >
          <Icon size={20} />
          {label}
        </NavLink>
      ))}
    </nav>
  );
};

export default MobileBottomNav;