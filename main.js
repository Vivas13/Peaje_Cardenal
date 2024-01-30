class CL_Participante {
    constructor(nombre, carta1, carta2, carta3) {
        this.nombre = nombre
        this.carta1 = carta1
        this.carta2 = carta2
        this.carta3 = carta3

    }

    Puntaje() {
        return this.carta1 + this.carta2 + this.carta3
    }

}

class Cl_Juego {
    constructor() {
        this.mayorPuntaje = 0
        this.NombreGanador = ""
        this.contMenor10 = 0
        this.contPart = 0

    }

    procesarParticipante(p) {
        if (this.mayorPuntaje < p.Puntaje()) {
            this.mayorPuntaje = p.Puntaje()
            this.NombreGanador = p.nombre
        }

        if (p.Puntaje() < 10)
            this.contMenor10++

        this.contPart++

    }

    PorcentajeJugadores10() {
        return (this.contMenor10 / this.contPart) * 100
    }
}


let participante1 = new CL_Participante("jue", 1, 3, 8)
let participante2 = new CL_Participante("moi", 3, 2, 1)
let participante3 = new CL_Participante("lui", 5, 7, 4)
let participante4 = new CL_Participante("jose", 9, 12, 10)
let participante5 = new CL_Participante("adan", 1, 2, 5)

let juego = new Cl_Juego()

juego.procesarParticipante(participante1)
juego.procesarParticipante(participante2)
juego.procesarParticipante(participante3)
juego.procesarParticipante(participante4)
juego.procesarParticipante(participante5)

let salida = document.getElementById('salida')

salida.innerHTML += `<p> nombre ${participante1.nombre}, carta1${participante1.carta1}, carta2${participante1.carta2}, carta3 ${participante1.carta3}, Puntaje${participante1.Puntaje()}</p>`

salida.innerHTML += `<p> nombre ${participante2.nombre}, carta1${participante2.carta1}, carta2${participante2.carta2}, carta3 ${participante2.carta3}, Puntaje${participante2.Puntaje()}</p>`

salida.innerHTML += `<p> nombre ${participante3.nombre}, carta1${participante3.carta1}, carta2${participante3.carta2}, carta3 ${participante3.carta3}, Puntaje${participante3.Puntaje()}</p>`

salida.innerHTML += `<p> nombre ${participante4.nombre}, carta1${participante4.carta1}, carta2${participante4.carta2}, carta3 ${participante4.carta3}, Puntaje${participante4.Puntaje()}</p>`

salida.innerHTML += `<p> nombre ${participante5.nombre}, carta1${participante5.carta1}, carta2${participante5.carta2}, carta3 ${participante5.carta3}, Puntaje${participante5.Puntaje()}</p>`

salida.innerHTML += `<p> Nombre del ganador= ${juego.NombreGanador}, con un total de: ${juego.mayorPuntaje}</p>`

salida.innerHTML += `<p> Porcentaje de jugadores con menos de 10pts= ${juego.PorcentajeJugadores10()}</p>`