// src/components/ui/Button.tsx

// Definimos las propiedades que el botón va a recibir
interface ButtonProps {
    onClick: () => void; // Función que se ejecuta cuando se hace clic
    className?: string; // Permite agregar clases personalizadas (opcional)
    children: React.ReactNode;
  }
  
  const Button = ({ onClick, className = "", children }: ButtonProps) => {
    return (
      <button
        onClick={onClick}
        className={`py-2 px-2 rounded-lg bg-blue-500 text-white hover:bg-[#096495] focus:outline-none ${className}`}
      >
        {children} {/* Aqui se renderiza el contenido del botón, que puede ser texto o cualquier elemento */}
      </button>
    );
  };
  
  export default Button;
  