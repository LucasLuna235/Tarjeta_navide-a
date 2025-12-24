const btnDeseos = document.getElementById('btn_deseos');
const deseos = document.getElementById('deseos');
const musica = document.getElementById('musica');

btnDeseos.addEventListener('click',mostrarCard);

function mostrarCard(){
    let mensaje ={
      "mensaje": "✨ <b>Feliz Navidad</b> ✨ <br><br>  Que esta Navidad llegue a tu vida como una luz suave, llenando tu corazón de paz, tu hogar de amor y tus días de esperanza. Que cada abrazo sea sincero, cada sonrisa verdadera y que los buenos deseos se multipliquen. Que nunca falte la fe en lo que viene, la fuerza para seguir soñando y la alegría de compartir.🎄✨ Que la magia de la Navidad te acompañe hoy y siempre ✨🎄 <br><br>Te deseo con mucho amor que tengas una  <button id='btn_close' onclick='closeCard();'><b>Feliz Navidad</b>✨🎄 </button>"
    }


    deseos.innerHTML = mensaje.mensaje;
    deseos.classList.add('showCard');

    musica.volume = 0.4;
    musica.play();
    lanzarEstrellas();
}

function closeCard(){
  deseos.classList.remove('showCard');
};


function lanzarEstrellas(){
  for(let i = 0; i < 20; i++){
    const star = document.createElement("span");
    star.className = "star";
    star.innerText = "⭐";

    // const rect = deseos.getBoundingClientRect();

    // star.style.left = rect.left + rect.width / 2 + "px";
    // star.style.top = rect.top + rect.height / 2 + "px";


    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = Math.random() * window.innerHeight + "px";

    document.body.appendChild(star);

    setTimeout(() => star.remove(), 1000);
  }
}
