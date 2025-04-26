document.getElementById("registroForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("correo");
    const carrera = document.getElementById("carrera");
    const conferencias = Array.from(document.querySelectorAll("input[name='conferencias']:checked"));

    const errorMsgs = document.querySelectorAll(".error-msg");
    errorMsgs.forEach(msg => {
        msg.textContent = "";
        msg.classList.remove("show");
        msg.classList.remove("success");
    });

    [nombre, correo, carrera].forEach(input => input.classList.remove("error"));

    let hayErrores = false;

    if (nombre.value.trim() === "") {
        mostrarError(nombre, "Por favor ingrese su nombre completo.");
        hayErrores = true;
    }


    if (correo.value.trim() === "") {
        mostrarError(correo, "Por favor ingrese su correo institucional.");
        hayErrores = true;
    } else if (!/^[\w.-]+@uamv\.edu\.ni$/.test(correo.value.trim())) {
        mostrarError(correo, "El correo debe ser institucional (@uamv.edu.ni).");
        hayErrores = true;
    }


    if (carrera.value.trim() === "") {
        mostrarError(carrera, "Por favor ingrese su carrera.");
        hayErrores = true;
    }


    if (conferencias.length === 0) {
        const conferenciasError = document.querySelector("fieldset + .error-msg");
        conferenciasError.innerHTML = iconoError() + "Seleccione al menos una conferencia.";
        conferenciasError.classList.add("show");
        hayErrores = true;
    }


    if (!hayErrores) {
       
        const form = document.getElementById("registroForm");


        const successMsg = document.createElement("div");
        successMsg.classList.add("error-msg", "show", "success");
        successMsg.innerHTML = iconoSuccess() + "¡Registro enviado correctamente!";


        form.appendChild(successMsg);


        this.reset();
    }
});


function mostrarError(input, mensaje) {
    const errorDiv = input.nextElementSibling;
    input.classList.add("error");
    errorDiv.innerHTML = iconoError() + mensaje;
    errorDiv.classList.add("show");
}

function iconoError() {
    return `
        <i class="bi bi-x-circle" style="color: red;"></i>
    `;
}


function iconoSuccess() {
    return `
        <i class="bi bi-check-circle" style="color: green;"></i>
    `;
}



