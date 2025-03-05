import React from "react";

// Defini el componente Header utilizando React con TypeScript
const Header: React.FC = () => {
  return (
    <header className="flex justify-center bg-[#096495] items-center py-6 w-full">
      <nav className="flex flex-row gap-x-10">
        <img src="/projects/Logo.png" alt="Logo" className="w-50 h-auto" />
      </nav>
    </header>
  );
};

export default Header;