// Módulo de Autenticación de Usuarios
function iniciarSesion(usuario, contrasena) {
    console.log("Iniciando proceso de validación...");
    if (usuario === "" || contrasena === "") {
        return "Error: Todos los campos son obligatorios.";
    }
    if (usuario === "admin" && contrasena === "1234") {
        return "Acceso concedido.";
    } else {
        return "Error: Credenciales incorrectas.";
    }
}