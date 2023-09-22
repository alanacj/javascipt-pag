function tocaSom (idElementoAudio) {
     document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto
while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    console.log(instrumento);

    const idAudio

    tecla.onclick = function () {
        tocaSom ();
    }

    contador = contador + 1;

    console.log(contador);

}
