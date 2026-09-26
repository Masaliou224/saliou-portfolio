import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import MobileHeader from "../components/MobileHeader";
import TopNav from "../components/TopNav";
import MobileBottomNav from "../components/MobileBottomNav";
import Footer from "../components/Footer";
import SidebarResizeHandle, { DEFAULT_WIDTH } from "../components/SidebarResizeHandle";

const MainLayout = () => {
  const [sidebarWidth, setSidebarWidth] = useState(() => {
    const saved = Number(localStorage.getItem("sidebarWidth"));
    return saved >= 240 && saved <= 480 ? saved : DEFAULT_WIDTH;
  });

  return (
    <div
      className="min-h-screen grid grid-cols-1 lg:grid-cols-[var(--sidebar-w)_6px_1fr] bg-ink text-mist"
      style={{ "--sidebar-w": `${sidebarWidth}px` }}
    >
      <Sidebar />
      <SidebarResizeHandle onResize={setSidebarWidth} />
      <div className="min-w-0 flex flex-col min-h-screen">
        <MobileHeader />
        <TopNav />
        {/* pb-24 laisse la place pour la bottom bar fixe sur mobile */}
        <main className="flex-1 pb-24 lg:pb-0">
          <Outlet />
        </main>
        <Footer />
        <MobileBottomNav />
      </div>
    </div>
  );
};

export default MainLayout;