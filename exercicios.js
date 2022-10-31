// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt("Digite a altura do retânculo"))
  const largura = Number(prompt("Digite a largura do retângulo"))
  const area = altura * largura
  console.log(area)
}


// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Insira o ano atual"))
  const anoNasc = Number(prompt("Insira o seu ano de nascimento"))
  console.log(anoAtual - anoNasc)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / altura**2
  return imc
}
// const x = Number(prompt("Insira seu peso em KG"))
// const y = Number(prompt("Insira sua altura em metros"))

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Insira seu nome")
  const idade = Number(prompt("Insira sua idade"))
  const email = prompt("Insira seu email")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let coresFavoritas = []
  coresFavoritas.push(prompt())
  coresFavoritas.push(prompt())
  coresFavoritas.push(prompt())
  console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo/valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  x = array[array.length-1]
  array[array.length-1] = array[0]
  array[0] = x
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase() === string2.toUpperCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt()) //2020
  const anoNasc = Number(prompt()) // 2000
  const anoCart = Number(prompt()) // 2015
  const idade = anoAtual - anoNasc  // 20 anos
  const tempoCart = anoAtual - anoCart // 5 anos
  const cincoAnos = idade <= 20 && tempoCart >= 5 // true E true = true
  const dezAnos = idade <= 50 && idade > 20 && tempoCart >= 10 // true E false E false = false
  const quizeAnos = idade >  50 && tempoCart >= 15 // false E false = false
  console.log(cincoAnos || dezAnos || quizeAnos)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {

  return (ano % 4 == 0) && ((ano % 100 != 0) || (ano % 400 == 0))

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const idade = prompt("Você tem 18 anos? sim/não")
  const escolaridade = prompt("Você tem ensino médio completo? sim/não")
  const disponibilidade = prompt("Você possui disponibillidade exclusiva durante os horários do curso? sim/não")
  const idadeCompativel = idade.toLowerCase() === "sim"
  const escolaridadeComp = escolaridade.toLowerCase() === "sim"
  const disponibilidadeComp = disponibilidade.toLowerCase() ==="sim"

  console.log(idadeCompativel && escolaridadeComp && disponibilidadeComp)

}