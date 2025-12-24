const btnDeseos = document.getElementById('btn_deseos');
const deseos = document.getElementById('deseos');

btnDeseos.addEventListener('click',mostrarCard);

function mostrarCard(){
    let mensaje ={
      "mensaje": "✨ <b>Feliz Navidad</b> ✨ <br><br>  Que esta Navidad llegue a tu vida como una luz suave, llenando tu corazón de paz, tu hogar de amor y tus días de esperanza. Que cada abrazo sea sincero, cada sonrisa verdadera y que los buenos deseos se multipliquen. Que nunca falte la fe en lo que viene, la fuerza para seguir soñando y la alegría de compartir.🎄✨ Que la magia de la Navidad te acompañe hoy y siempre ✨🎄 <br><br> <button id='btn_close'>Aceptar</button>"
    }


    deseos.innerHTML = mensaje.mensaje;
    deseos.classList.add('showCard');
}

