/* ---- Events ---- */

function gerar () {
  const select = document.querySelector('sl-radio-group')
  const input = document.querySelector('sl-input')

  if (select.value === '1') input.value = gerarTipo1()
  else if (select.value === '2') input.value = gerarTipo2()
}

function copiar () {
  const input = document.querySelector('sl-input')
  const senha = input.value

  copiarClipboard(senha)
  notificar()
}

function fecharDialog () {
  const dialog = document.querySelector('sl-dialog')
  document.body.removeChild(dialog)
}

/* ---- Main Functions ---- */

function gerarTipo1 () {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  const gerar = () => gerarCaracteresAleatorios(4, caracteres)
  return `${gerar()}-${gerar()}-${gerar()}-${gerar()}`
}

function gerarTipo2 () {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
  const gerar = () => gerarCaracteresAleatorios(5, caracteres)
  return `${gerar()}-${gerar()}-${gerar()}-${gerar()}`
}

/* ---- Components ---- */

function notificar () {
  const html = `
  <sl-icon slot="icon" name="info-circle"></sl-icon>
  Senha copiada com sucesso
  `

  const alert = document.createElement('sl-alert')
  alert.setAttribute('variant', 'primary')
  alert.setAttribute('closable', true)
  alert.setAttribute('duration', 3000)
  alert.setAttribute('hidden', true)
  alert.innerHTML = html

  document.body.append(alert)
  setTimeout(() => alert.toast(), 150)
}

function dialog () {
  const html = `
  A ferramenta oferece dois formatos de senha:<br>
  <br>
  Formato 1:<br>
  - 16 caracteres aleatórios (letras maiúsculas e números), separados por hífen em grupos de 4.<br>
  - Quebrar com uma RTX 4060 levaria 25 quatrilhões de anos.<br>
  - Quebrar com computação quântica levaria 252 mil anos.<br>
  <br>
  Formato 2:<br>
  - 20 caracteres aleatórios (letras maiúsculas, minúsculas e números), separados por hífen em grupos de 5.<br>
  - Quebrar com uma RTX 4060 levaria 2 octilhões de anos.<br>
  - Quebrar com computação quântica levaria 2 sextilhões de anos.<br>
  <br>
  <sl-button slot="footer" variant="primary" onclick="fecharDialog()">Close</sl-button>
  `

  const dialog = document.createElement('sl-dialog')
  dialog.setAttribute('label', 'Dialog')
  dialog.setAttribute('class', 'dialog-overview')
  dialog.setAttribute('hidden', true)
  dialog.innerHTML = html

  document.body.append(dialog)
  setTimeout(() => dialog.show(), 150)
}

/* ---- Aux Functions ---- */

function copiarClipboard (conteudo) {
  navigator.clipboard.writeText(conteudo)
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
