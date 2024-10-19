// src/components/Layout.tsx

import React from "react";

import Header from "./Header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] ">
      <Header />

      <main className="flex-grow p-4">{children}</main>
      <footer className="bg-blue-500 text-white p-4 text-center">
        © 2024 Your Company
      </footer>
    </div>
  );
};

export default Layout;
