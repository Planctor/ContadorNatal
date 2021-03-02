// TITULO
const body = document.querySelector('body')
class Texto {
    constructor(titulo) {
        this.titulo = titulo;
    }
    criarTexto(tamanho) {
        const titulo = document.createElement('h1');
        titulo.innerText = this.titulo;
        titulo.classList.add('titulo')
        titulo.style.fontSize = tamanho + 'em'
        body.appendChild(titulo)
        return titulo
    }
}

class tamanho extends Texto {
    tamanho(tam) {
        super.criarTexto(tam)
    }
}

const texto = new tamanho('Natal em:')
texto.tamanho(5)

// EFEITO DE TEMPO 

class DataEvento {
    set tempo(dataEvento) {
        this.dataEvento = dataEvento
    }
    get agora() {
        return new Date()
    }
    get evento() {
        return new Date(this.dataEvento)
    }
    get tempo() {
        return this.evento.getTime() - this.agora.getTime()
    }
    mostrarDias() {
        const mes = Math.floor(this.tempo / (30 * 24 * 60 * 60 * 1000))
        const dia = (Math.floor(this.tempo / (24 * 60 * 60 * 1000)) % 30) + 1
        const hora = Math.floor(this.tempo / (60 * 60 * 1000) % 24)
        const minuto = Math.floor(this.tempo / (60 * 1000) % 60)
        const segundo = Math.floor(this.tempo / 1000 % 60)

        return {
            mes,
            dia,
            hora,
            minuto,
            segundo,
        }
    }
}

const Natal = new DataEvento
Natal.tempo = 'Dec 25 2021 00:00:00 GMT-0300'

const paragrafo = document.createElement('p')
body.appendChild(paragrafo)

setInterval(() => {
    let mes = Natal.mostrarDias().mes
    let dia = Natal.mostrarDias().dia
    let hora = Natal.mostrarDias().hora
    let minuto = Natal.mostrarDias().minuto
    let segundo = Natal.mostrarDias().segundo

    return paragrafo.innerText = `${mes} / ${dia} / ${hora} : ${minuto} : ${segundo}`
}, 1000)
