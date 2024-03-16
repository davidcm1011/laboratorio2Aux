function Usuario(name: string, ci: string, email: string): { name: string, ci: string, email: string } {
    return {
        name: name,
        ci: ci,
        email: email
    };
}

const usuario = Usuario("Mayra", "63295164", "Mayra11@gmail.com");
console.log(usuario);