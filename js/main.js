function valorEntrada() {

    var capCantidad = document.getElementById('cantidad').value;
    var capCategoria = document.getElementById('estadia').value;
    const TICKET = 3500;
    var resumenTotal = 0;

    switch (capCategoria) {
        case "0":
            resumenTotal = capCantidad * TICKET * 0.5;
            break;
        case "1":
            resumenTotal = capCantidad * TICKET;
            break;
        case "2":
            resumenTotal = capCantidad * TICKET * 2 * 0.8;
            break;
    }


    document.getElementById('total').innerText = resumenTotal;
}


function controlForm() {

    //CONTROLO NOMBRE
    const nom = nombre.value;

    var regex = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;

    if (regex.test(nom)) {
        nombre.classList.remove('is-invalid');
    } else {
        nombre.classList.add("is-invalid");
        nombre.focus();
    }

    //CONTROLO APELLIDO
    const ape = apellido.value;

    var regex = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;

    if (regex.test(ape)) {
        apellido.classList.remove('is-invalid');
    } else {
        apellido.classList.add("is-invalid");
        apellido.focus();
    }

    //CONTROLO CANTIDAD
    const cant = cantidad.value;

    var regex = /^[0-9]+$/;

    if (regex.test(cant)) {
        cantidad.classList.remove('is-invalid');
    } else {
        cantidad.classList.add("is-invalid");
        cantidad.focus();
    }

    //CONTROLO ESTADIA
    const est = estadia.value;

    var regex = /^[0-2]+$/;

    if (regex.test(est)) {
        estadia.classList.remove('is-invalid');
    } else {
        estadia.classList.add("is-invalid");
        estadia.focus();
    }
   
    //CONTROLO MAIL
    const correo = mail.value;

    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (regex.test(correo)) {
        mail.classList.remove('is-invalid');
    } else {
        mail.classList.add("is-invalid");
        mail.focus();
    }

    valorEntrada();
}


const BTNCLICK = document.getElementById('btnResumen');

BTNCLICK.addEventListener('click', controlForm);
