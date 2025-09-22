
// Array para almacenar los nombres
let amigos = [];

// Función para añadir amigos
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // Validar nombre vacío
    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    // Validar solo letras y espacios
    const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!soloLetras.test(nombre)) {
        alert("Solo se permiten letras y espacios (sin números ni símbolos).");
        input.value = "";
        return;
    }

    // Validar nombre repetido
    if (amigos.includes(nombre)) {
        alert("Ese nombre ya fue agregado.");
        input.value = "";
        return;
    }

    // Agregar al array
    amigos.push(nombre);
    input.value = "";

    // Mostrar en pantalla
    actualizarLista();
}

// Función para actualizar la lista visual
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (amigos.length === 0) {
        alert("Primero agrega al menos un nombre.");
        return;
    }

    // Elegir nombre aleatorio
    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indice];

    // Mostrar resultado
    const li = document.createElement("li");
    li.textContent = `🎉 El amigo secreto es: ${amigoSecreto}`;
    resultado.appendChild(li);
}
