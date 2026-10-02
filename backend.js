document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registroForm");
    const mensaje = document.getElementById("mensaje");
    const lista = document.getElementById("listaAprendices");

    let aprendices = [
        { nombre: "Juan Guerrero", correo: "amadeusbase8@gmail.com", ficha: "228118" }
    ];

    function renderizarLista() {
        lista.innerHTML = "";
        aprendices.forEach(function(ap) {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${ap.nombre}</strong> - ${ap.correo} <br><small>Ficha: ${ap.ficha}</small>`;
            lista.appendChild(li);
        });
    }

    renderizarLista();

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value;
        const ficha = document.getElementById("ficha").value;

        if (!validarCorreoSENA(correo)) {
            mensaje.style.color = "red";
            mensaje.textContent = "Error: El correo debe pertenecer al dominio @sena.edu.co";
            return;
        }

        aprendices.push({ nombre, correo, ficha });
        renderizarLista();

        mensaje.style.color = "#39A900";
        mensaje.textContent = "¡Aprendiz registrado exitosamente!";
        form.reset();
    });
});
