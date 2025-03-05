import { useState } from "react";
import Input from "../components/Input"
import Button from "../components/Button"

const LoginPage = () => {
    // Se define el estado de los campos 'name' y 'email' para almacenar el valor de los inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Función que maneja el evento de inicio de sesión
  const handleLogin = () => {
    if (name.trim() !== "" && email.trim() !== "") {
          // Si los campos no están vacíos, guarda el nombre y correo en localStorage
          localStorage.setItem("name", name);
          localStorage.setItem("email", email);

      // Redirige al usuario a la página de temas, pasando el nombre y correo como parámetros en la URL
      window.location.href = `/temas?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`;
    } else {
      alert("Ingresa tu nombre y correo electronico");
    }
  };

  return (
    <>
      {/* Campo de entrada para el nombre del usuario */}
      <Input
        type="text"
        placeholder="Escribe tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mb-4 w-full p-2 border rounded-lg"
      />

      {/* Campo de entrada para el correo electrónico del usuario */}
      <Input
        type="email"
        placeholder="Escribe tu correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-4 w-full p-2 border rounded-lg"
      />

      {/* Botón de inicio de sesión que llama a la función `handleLogin` al hacer clic */}
      <Button onClick={handleLogin} className="w-full bg-blue-700 text-white p-2 rounded-lg">
        Entrar
      </Button>
    </>
  );
};

export default LoginPage; // Exportacion del componente LoginPage para que pueda ser usado en otros lugares