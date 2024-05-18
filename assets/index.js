/* ---- Elements ---- */

const buttonTipo1 = document.querySelector('button#tipo1')
const buttonTipo2 = document.querySelector('button#tipo2')

/* ---- Events ---- */

buttonTipo1.addEventListener('click', gerarTipo1)
buttonTipo2.addEventListener('click', gerarTipo2)

/* ---- Callbacks ---- */

function gerarTipo1 () {
  const caracteres = 'abcdefghijklmnopqrstuvwxyz'
  const gerar = () => gerarCaracteresAleatorios(4, caracteres)
  const senha = `${gerar()}-${gerar()}-${gerar()}-${gerar()}`
  
  copiarClipboard(senha)
  notificar(senha)
}

function gerarTipo2 () {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  const senha = gerarCaracteresAleatorios(24, caracteres)
  
  copiarClipboard(senha)
  notificar(senha)
}

/* ---- Aux Functions ---- */

function copiarClipboard (conteudo) {
  navigator.clipboard.writeText(conteudo)
}

function notificar (conteudo) {
  window.alert('Senha Copiada: ' + conteudo)
}

function gerarCaracteresAleatorios (tamanho, caracteresPermitidos) {
  let senha = ''
  
  for (let i = 0; i < tamanho; i++) {
    const letrasMinusculas = caracteresPermitidos
    const indiceAleatorio = Math.floor(Math.random() * letrasMinusculas.length)
    senha += letrasMinusculas[indiceAleatorio]
  }
  
  return senha
}