// Módulo de Autenticación de Usuarios
function iniciarSesion(usuario, contrasena) {
    console.log("Iniciando proceso de validación...");

    if (usuario === "" || contrasena === "") {
        return "Error: Todos los campos son obligatorios.";
    }

    if (usuario === "admin_final" && contrasena === "1234") {
        return "Acceso concedido.";
    } else {
        return "Error: Credenciales incorrectas.";
    }
}

// --- PRUEBAS EN VIVO ---
console.log( iniciarSesion("", "") );                  // Caso 1: Campos vacíos
console.log( iniciarSesion("admin", "wrong") );        // Caso 2: Contraseña incorrecta
console.log( iniciarSesion("admin_final", "1234") );   // Caso 3: Acceso correcto