import React from "react";

// Definimos las propiedades que el botón va a recibir
interface ButtonProps {
  className?: string;
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-4 border-2 rounded-md border-white bg-blue-300 transition-all duration-300 hover:bg-[#096495] hover:text-white"
      >
      {label}
    </button>
  );
};

export default Button;
