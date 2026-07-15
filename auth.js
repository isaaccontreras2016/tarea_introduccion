// Módulo de Autenticación de Usuarios
function iniciarSesion(usuario, contrasena) {
    console.log("Iniciando proceso de validación...");
    if (usuario === "" || contrasena === "") {
        return "Error: Todos los campos son obligatorios.";
    }
    if (usuario === "admin1234" && contrasena === "1234") {
        return "Acceso concedido.";
    } else {
        return "Error: Credenciales incorrectas.";
    }
}
// --- PRUEBAS EN VIVO ---
console.log( iniciarSesion("", "") );
console.log( iniciarSesion("admin", "wrong") );
console.log( iniciarSesion("admin", "1234") );