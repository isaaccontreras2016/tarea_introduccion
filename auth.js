<<<<<<< HEAD
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
=======
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
>>>>>>> 1fe7dede75950863ff29c33a10eb25aa5c60d029

<<<<<<< HEAD
   if (usuario === "admin_local" && contrasena === "1234") {
   =======
   if (usuario === "admin_web" && contrasena === "1234") {
   >>>>>>> 137bfa2b... (o números raros)

if (usuario === "admin_final" && contrasena === "1234") {