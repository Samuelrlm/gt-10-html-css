const nome = "Samuel" //texto - string
const idade = 24 //número - number
const altura = 1.80 //número - number
const maiorDeIdade = true //booleano - boolean

console.log("Olá seu nome é " + nome) //concatenação  
//olá seu nome é Samuel, você tem 24 anos e sua altura é 1.80
console.log("olá seu nome é " + nome + ", você tem " + idade + " anos e sua altura é " + altura)

//Olá voĉe é maior de idade? true 
console.log("Olá você é maior de idade? " + maiorDeIdade)

//template string ou string dinamica
const frase = `Olá seu nome é ${nome} você tem ${idade} anos`

console.log(frase)

console.log(1 + "10")