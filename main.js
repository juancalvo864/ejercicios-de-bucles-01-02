
//ejercicio nro 1

/* function multiplicacion(numero) {
    numero = prompt("ingrese numero")
    for (let i = 1; i <= 10; i += 1) {
        console.log(numero * i)
    }

}
multiplicacion()
 */

//ejercicio nro 2

/* function acumulador(nros) {
    let acu = 0
    while (nros !== 0) {
        nros = Number(prompt("numero"))
        acu += nros

    }
    console.log(acu)

}

acumulador() */

//ejercicio nro 3

//*crear una funcion que tenga una variable que contenga al nro }
//resultante del ejercicio anterior
//*el usuario debera ingrear nros hasta adivinar el nro secreto
//*si es menor avisar que es menor y si es mayor avisar que es mayor
//si adivina , mostrar que gano el juego
//mostrar cuantos intentos tuvo hasta adivinar

/*
function numeroSecreto(nro, secreto) {
    nro = Number(prompt('para comenzar el juego ingrese un numero del 1 al 100'))
    let nroSecreto = secreto
    let intentos = 0
    while (nroSecreto >= 1 || nroSecreto <= 100) {
        intentos++
        if (nro > nroSecreto) {
            alert("el nro ingresado es mayor al nro secreto")
            nro = Number(prompt("ingrese un nuevo numero"))
        } else if (nro < nroSecreto) {
            alert("el nro ingresado es menor al nro secreto")
            nro = Number(prompt("ingrese un nuevo numero"))
        } else {
            break
        }
    }
    alert('felicitaciones adivino el nro secreto')
    alert('usted lo ha utilizado ' + intentos + ' intentos')
}

numeroSecreto(1, 55) */


//ejercicionro 4
//crear una funccion que nos digas si un nro es primo


/* function nrosPrimos() {
    let nro = Number(prompt("ingrese un numero para saber si es primo o no"))
    while (nro > 0) {
        if (nro == 0 || nro == 1 || nro == 4) {
            alert("no es numero primo")
        }
        for (let num = 2; num < nro / 2; num++) {
            if (nro % num === 0) {
                alert("no es numero primo")
                nro = Number(prompt("ingrese un numero para saber si es primo o no"))
            }

        }
        alert("es numero primo")
        nro = Number(prompt("ingrese un numero para saber si es primo o no"))
    }
}




nrosPrimos() */



//ejercicio nro 5


/* function mostrarDivisores() {
    let nro = Number(prompt("ingrese un numero"))
    let acum = ""
    for (let x = 1; x <= nro; x++) {
        if (nro % x === 0)
            acum += x + " , "

    }
    console.log(acum)
}

mostrarDivisores() */

//ejercicio nor 6

/* let array = [2, 5, 6, 9, 7, "hola", "que tal?", "esto es un string dentro de un array"]

for (let acum of array) {
    console.log(acum)
}
 */


//ejercicio 7

/*
let array = [2, 5, 6, 9, 7, 8, 22, 56, 86]

for (let acum of array) {
    console.log(acum * 2)
} */

//ejercicio 8

/*
const grupo = [
    {
        nombre: "Leonel",
        apellido: "carpaccio",
        altura: 168,
        profecion: "carpintero"
    },
    {
        nombre: "Patricia",
        apellido: "kepler",
        altura: 165,
        profecion: "maestra"
    },
    {
        nombre: "Ignacio",
        apellido: "Guna",
        altura: 185,
        profecion: "maquinista"
    },
    {
        nombre: "Martina",
        apellido: "Salustra",
        altura: 170,
        profecion: "conductora"
    },
    {
        nombre: "Mariano",
        apellido: "Ilon",
        altura: 190,
        profecion: "vendedor"
    }
]

function saludo(objeto) {

    for (let nom of objeto) {
        console.log("Les presento a " + nom.nombre + ",su apellido es " + nom.apellido + ", su altura es " + nom.altura + " y por ultimo su profecions es " + nom.profecion)
    }
}


saludo(grupo) */


//ejercicio nro 9



/* let array = [44, 55, 96, 35, 22, 14, 75, 32, 2, 7]

function impares(numero) {
    let acum = ""
    for (let num of numero) {
        if (num % 2 === 0) {
            acum += num + ","
        }
    }
    console.log(acum)
}

impares(array) */


//ejercicio nro 10


/* function sumaDeParesEImpares(numero) {
    let pares = 0
    let impares = 0
    numero = Number(prompt("ingrese un numero distinto a cero para sumarlos , si quiere finalizar ingrese cero"))
    while (numero > 0) {
        if (numero % 2 === 0) {
            pares += numero
            numero = Number(prompt("ingrese un numero distinto a cero para sumarlos , si quiere finalizar ingrese cero"))
        } else {
            impares += numero
            numero = Number(prompt("ingrese un numero distinto a cero para sumarlos , si quiere finalizar ingrese cero"))
        }
    }

    alert("la sumatoria de numeros pares es : " + pares)
    alert("la sumatoria de numeros impares es : " + impares)
}

sumaDeParesEImpares() */


//ejercicio nro 11

/* let array = [22, 33, 150, 56, 325, 94, 76, 72, 34, 98]

console.log(Math.max(...array))
 */


//ejercicio nro 12

/* let array = [22, 33, 150, 56, 325, 94, 76, 72, 34, 98]

console.log(Math.min(...array)) */

//ejercicio nro 13

/* function piedraPapelTijeras(cantidadDeRondas) {
    let contador1 = 0
    let contador2 = 0
    for (let i = 0; i < cantidadDeRondas; i++) {
        jugador1 = prompt("jugador nro1 ingrese piedra, papel o tijeras")
        jugador2 = prompt("jugador nro2 ingrese piedra, papel o tijeras")
        if (jugador1 === "tijeras" && jugador2 === "papel" || jugador1 === "piedra" && jugador2 === "tijeras" ||
            jugador1 === "papel" && jugador2 === "piedra") {
            alert("el jugador 1 ha ganado")
            contador1++

        } else if (jugador1 === jugador2) {
            alert("han empatado")


        } else {
            alert("el jugador 2 ha ganado")
            contador2++
        }
    }
    if (contador1 > contador2) {
        alert("el jugador nro 1 es el ganador del juego ")
    } else {
        alert("el jugador nro 2 es el ganador del juego ")
    }


}

piedraPapelTijeras(3)
 */



// jercicio nro 14


/* function triangulo(nro) {

    for (let x = 1; x <= nro; x++) {
        let lado = ""
        for (let i = 0; i < x; i++)
            lado += "* ";
        console.log(lado)
    }

}

triangulo(5) */

//ejercicio nro 15




/*
function pyramid(nro) {
    for (let i = 0; i < nro; i++) {
        let linea = '';
        for (let j = 1; j < nro - i; j++) {
            linea = linea + ' ';
        }

        for (let j = 0; j < i + 1; j++) {
            linea = linea + '*';
        }
        console.log(linea);
    }
}

pyramid(5); */


//ejercicio nro 16 



/* let array = [55, 23, 14, 68, 95, 63, 15, 65, 87, 41]

function acomodarNumeros(ingreso) {
    let nuevoArray = []

    for  {
        for (let x = 0; x < ingreso.length - 1; x++) {
            if (ingreso[x] > ingreso[x + 1]) {
                const number1 = ingreso[x];
                const number2 = ingreso[x + 1];
                nuevoArray[x + 1] = number1;
                nuevoArray[x] = number2;
            }
        }
    }
    console.log(nuevoArray)
}

acomodarNumeros(array) */


