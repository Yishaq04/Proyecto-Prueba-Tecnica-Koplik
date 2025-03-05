
// Definimos las propiedades que va a recibir el componente usando TypeScript
interface InputProps {
  type: string; // Tipo de input (texto, correo, contraseña, etc.)
  placeholder: string; 
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>; // Evento que se dispara cuando el usuario escribe
  className?: string;
}

const Input = ({ type, placeholder, value, onChange, className = "" }: InputProps) => {
  return (
    <input
      type={type} // Tipo de input
      placeholder={placeholder}  // Texto de ayuda
      value={value} // Muestra el valor actual
      onChange={onChange}  // Ejecuta la función cada vez que el usuario escribe
      className={`w-full py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    />
  );
};

export default Input; // Se exporta el componente para usarlo en otras partes del proyecto
