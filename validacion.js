//Haz tú validación en javascript acá
const formulario = document.querySelector("formcontacto__contacto");
const inputs = document.querySelectorAll("formcontacto__contacto");

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    asunto: /^[a-zA-ZÀ-ÿ\s]{1,60}$/,
    mensaje: /^[\s\S]{1,450}$/
}

const campos = {
    nombre: false,
    email: false,
    asunto: false,
    mensaje: false
}

const validarFormulario = (e) => {
    switch(e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, "nombre");
            break;
        
        case "email":
            validarCampo(expresiones.correo, e.target, "email");
            break;

        case "asunto":
            validarCampo(expresiones.asunto, e.target, "asunto");
            break;
            
        case "mensaje":
            validarCampo(expresiones.asunto, e.target, "mensaje");
            break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)){
        document.querySelector(`.formcontato__${campo}-error`).classList.add("error-activo");
        campos[campo] = true;
    } else {
        document.querySelector(`.formcontato__${campo}-error`).classList.remove("error-activo", "formcontato__error");
        document.querySelector(`.formcontato__${campo}-error`).classList.add("formcontato__error");
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e) => {
    // e.preventDefault();

    if(campos.nombre && campos.email && campos.asunto && campos.mensaje) {
        // formulario.reset();

        document.querySelector(".mensaje__enviado").classList.remove("error-activo");
        setTimeout(() => {
            document.querySelector(".mensaje__enviado").classList.add("error-activo");
        }, 3000);
        
        setTimeout(() => {
            location.reload();
        }, 5000);

    } else {
        document.querySelector(".mensaje__incompleto").classList.remove("error-activo");
    }
});