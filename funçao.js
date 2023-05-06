let musicas = [
   {
      titulo: "arvores", artista: 'homem arvore', src: "audios/exciting-music-5-127788.mp3"
      , img: "imag/2017-10-06-15-51-50-1100x733.jpg"
   },
   {
      titulo: "ruas", artista: 'uma grande', src: "audios/time-to-dream-relaxing-acoustic-nylon-guitar-139242.mp3"
      , img: "imag/R.jpg"
   }
   , {
      titulo: "ceu noturno", artista: "anonimo", src: "audios/reflected-light-147979.mp3", img: "imag/ceunoturno.jpg"
   }
];
let musica = document.querySelector("audio");
let indexMusica = 0;
let duracaoMusica = document.querySelector(".finaleira");
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector(".descricao h2");
let nomeArtista = document.querySelector(".descricao i");

renderizarMusica(indexMusica);


// eventos
document.querySelector(".botao-play").addEventListener("click", tocarmusica);

document.querySelector(".botao-pause").addEventListener("click", pausarmusica);

musica.addEventListener("timeupdate", atualizarBarra)

document.querySelector(".anterior").addEventListener("click", () => {
   indexMusica--;
   if (indexMusica < 0) {
      indexMusica = 2;
   }
   renderizarMusica(indexMusica);
});
document.querySelector(".proximo").addEventListener("click", () => {
   indexMusica++;
   if (indexMusica > 2) {
      indexMusica = 0;
   }
   renderizarMusica(indexMusica);


});
//funcoes
function renderizarMusica(index) {
   musica.setAttribute("src", musicas[index].src);
   musica.addEventListener("loadeddata", () => {
      nomeMusica.textContent = musicas[index].titulo;
      nomeArtista.textContent = musicas[index].artista;
      imagem.src = musicas[index].img;
      duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
   })
}


function tocarmusica() {
   musica.play();
   document.querySelector(".botao-pause").style.display = "block";
   document.querySelector(".botao-play").style.display = "none";

}

function pausarmusica() {
   musica.pause();
   document.querySelector(".botao-pause").style.display = "none";
   document.querySelector(".botao-play").style.display = "block";
}
function atualizarBarra() {
   let barra = document.querySelector("progress");
   barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + "%";
   let tempopercorrido = document.querySelector(".inicio");
   tempopercorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}
//atualzair barra
function segundosParaMinutos(segundos) {
   let campoMinutos = Math.floor(segundos / 60);
   let campoSegundos = segundos % 60;
   if (campoSegundos < 10) {
      campoSegundos = '0' + campoSegundos;
   }
   return campoMinutos + ':' + campoSegundos;
}

