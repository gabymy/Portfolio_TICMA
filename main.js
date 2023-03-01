
var respuestas = [
    "Adoro trabajar en equipo",
    "Manejo Figma, Photoshop, Trello",
    "Soy curiosa",
    "Sé escuchar a los que más saben",
    "Tengo un manejo excelente del tiempo",
    "Estoy dispuesta a aprender",
    "¡Definitivamente no vas a conocer a nadie como yo!",
    "No hay edad para comenzar",
    "Python y sus librerías fueron mis comienzos",

];

var botonRespuesta = document.getElementById("botonRespuesta");

botonRespuesta.addEventListener("click", function () {
    var respuesta = respuestas[Math.floor(Math.random() * respuestas.length)];
    botonRespuesta.innerHTML = respuesta;
});



$(document).ready(function () {
    // Animación al hacer scroll
    $(window).scroll(function () {
        $('h1, h2, h3, p, img').each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200) {
                $(this).addClass('animate__animated animate__fadeInUp');
            }
        });
    });

    const form = document.querySelector('#contact-me form');
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');
    const submitButton = document.querySelector('#contact-me button');

    form.addEventListener('submit', function (event) {
        event.preventDefault();


        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (name === '') {
            alert('Por favor ingrese su nombre.');
            nameInput.focus();
            return;
        }

        if (email === '') {
            alert('Por favor ingrese su correo electrónico.');
            emailInput.focus();
            return;
        }

        if (!isValidEmail(email)) {
            alert('Por favor ingrese un correo electrónico válido.');
            emailInput.focus();
            return;
        }

        if (message === '') {
            alert('Por favor ingrese un mensaje.');
            messageInput.focus();
            return;
        }


        form.submit();
    });


    function isValidEmail(email) {
        const regex = /\S+@\S+\.\S+/;
        return regex.test(email);
    }
});