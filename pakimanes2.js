const seccionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const seccionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const boton_reiniciar = document.getElementById("boton-reiniciar")


const seccionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const inputCauchin = document.getElementById("Cauchin")
const inputPokacho = document.getElementById("Pokacho")
const inputTocinauro = document.getElementById("Tocinauro")
const spanMascotaJugador = document.getElementById("mascota-jugador")

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataqueDelJugador = document.getElementById("ataque-del-jugador")
const ataqueDelEnemigo = document.getElementById("ataque-del-enemigo")

let pakimanes = []
let ataqueJugador
let ataqueEnemigo
let resultado
let vidasJugador = 3
let vidasEnemigo = 3

class Pakimanes{
    constructor(nombre, imagen, vidas) {
        this.nombre = nombre
        this.imagen = imagen
        this.vidas = vidas
        this.ataques = []
    }
}

let cauchin = new Pakimanes("Cauchin", "Cauchin.png", 20)
let pokacho = new Pakimanes("Pokacho", "Pokacho.png", 10)
let tocinauro = new Pakimanes("Tocinauro", "Tocinauro.png", 15)

pakimanes.push(cauchin,pokacho,tocinauro)



function iniciarJuego() {

    seccionSeleccionarAtaque.style.display ="none"
    seccionReiniciar.style.display = "none"
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    boton_reiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador() {


    seccionSeleccionarMascota.style.display ="none"

    seccionSeleccionarAtaque.style.display ="flex"


    
    if (inputCauchin.checked) {
        spanMascotaJugador.innerHTML = "Cauchin"
    } else if (inputPokacho.checked) {
        spanMascotaJugador.innerHTML = "Pokacho"
    } else if (inputTocinauro.checked) {
        spanMascotaJugador.innerHTML = "Tocinauro"
    } else {
        alert('Selecciona una mascota')
        reiniciarJuego()
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,3)

    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = "Cauchin"
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = "Pokacho"
    } else {
        spanMascotaEnemigo.innerHTML = "Tocinauro"
    }
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO🔥'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA💧'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA🌱'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO🔥'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA💧'
    } else {
        ataqueEnemigo = 'TIERRA🌱'
    }

    combate()
}

function combate() {

            
        
        if (ataqueEnemigo == ataqueJugador) {
            crearMensaje("EMPATE 😒")
          } else if (ataqueJugador == 'FUEGO🔥' && ataqueEnemigo == 'TIERRA🌱') {
            vidasEnemigo--
            spanVidasEnemigo .innerHTML = vidasEnemigo
            crearMensaje("GANASTE 🎉")
          } else if (ataqueJugador == 'AGUA💧' && ataqueEnemigo ==  'FUEGO🔥') {
            vidasEnemigo--
            spanVidasEnemigo .innerHTML = vidasEnemigo
            crearMensaje("GANASTE 🎉")
          } else if (ataqueJugador == 'TIERRA🌱' && ataqueEnemigo == 'AGUA💧') {
            vidasEnemigo-- 
            spanVidasEnemigo.innerHTML = vidasEnemigo
            crearMensaje("GANASTE 🎉")
          } else {
            vidasJugador--
            spanVidasJugador.innerHTML = vidasJugador
            crearMensaje("PERDISTE 😞")
          }
          revisarVidas()
        }

function revisarVidas() {
            if (vidasEnemigo == 0) {
                crearMensajeFinal("GANASTE, La mascota enemiga no tiene vidas")
            } else if (vidasJugador == 0) {
                crearMensajeFinal("PERDISTE, Tu mascota ya no tiene vidas")
            } 
}

function crearMensaje(resultado) {

    

    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {

    

    sectionMensajes.innerHTML =resultadoFinal



    botonFuego.disabled = true

    botonAgua.disabled = true

    botonTierra.disabled = true


    seccionReiniciar.style.display ="block"
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)












































