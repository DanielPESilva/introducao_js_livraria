let nome = "SILVIO SANTOS"
let idade = 80
let usuarioAtivo = true

console.log(`Usuario ativo:${usuarioAtivo}`)
console.log(`A idade de ${nome} é ${idade}`)

//constante
const PI = 3.1415

let ehMaior = idade >= 18 ? 'É maior de idade' : 'É menor de idade'
//let ehMaior = idade >= 18 ? 'é maior de idade' : 'é menor de idade'

console.log(ehMaior)

//arrays
let Frutas = ["maça", "pera", "uva"]
console.log(Frutas)
console.log(Frutas[0])
console.log(Frutas.lenght)
console.log(Frutas[0])
console.log(typeof(Frutas))
frutas[0] = "banana"

//objetos
let livro = {
    titulo: 'diario de um banana',
    autor: 'Nao lembro',
    ANO: 2000
}
livro.ANO = 1969
console.table(livro)

