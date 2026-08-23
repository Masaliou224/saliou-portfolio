import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import MobileHeader from "../components/MobileHeader";
import TopNav from "../components/TopNav";
import MobileBottomNav from "../components/MobileBottomNav";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[320px_1fr] bg-ink text-mist">
      <Sidebar />
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