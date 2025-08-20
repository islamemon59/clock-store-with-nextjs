"use client"
import React, { useState } from "react";
import MobileNavMenu from "../MobileNavMenu/MobileNavMenu";
import { FiMenu } from "react-icons/fi";

const MobileMenuToggleButton = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsMenuOpen(true)}
        className="md:hidden text-gray-600 hover:text-indigo-600 focus:outline-none"
      >
        <FiMenu className="h-6 w-6" />
      </button>
      <MobileNavMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
};

export default MobileMenuToggleButton;
