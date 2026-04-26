import './style.css'

type BirthdayConfig = {
  celebrantName: string
  senderName: string
}

type ViteBirthdayEnv = {
  VITE_CELEBRANT_NAME?: string
  VITE_SENDER_NAME?: string
}

const env = (import.meta as ImportMeta & { env: ViteBirthdayEnv }).env

const defaultConfig: BirthdayConfig = {
  celebrantName: env.VITE_CELEBRANT_NAME?.trim() || 'Thais',
  senderName: env.VITE_SENDER_NAME?.trim() || 'Quem te ama',
}

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('Elemento #app nao encontrado.')
}

app.innerHTML = `
  <section class="boot-screen" id="boot-screen" aria-label="Tela de inicializacao">
    <div class="boot-card">
      <div class="boot-flag" aria-hidden="true">
        <span class="red"></span>
        <span class="green"></span>
        <span class="blue"></span>
        <span class="yellow"></span>
      </div>
      <div class="boot-wordmark">MICROSOFT WINDOWS NT</div>
      <div class="boot-version">Version 3.1</div>
      <div class="boot-copy">Carregando modulo de aniversario...</div>
      <div class="boot-bar"><div class="boot-fill"></div></div>
      <div class="boot-status" id="boot-status">Inicializando Program Manager</div>
    </div>
  </section>

  <section class="desktop-shell" id="desktop-shell" aria-label="Desktop comemorativo">
    <div class="confetti" id="confetti"></div>

    <main class="program-manager">
      <header class="title-bar main-title">
        <div class="title-left">
          <span class="title-mark"></span>
          <span>Program Manager</span>
        </div>
        <div class="title-actions" aria-hidden="true">
          <span class="title-button">_</span>
          <span class="title-button">?</span>
        </div>
      </header>

      <nav class="menu-bar">
        <span>File</span>
        <span>Options</span>
        <span>Window</span>
        <span>Help</span>
      </nav>

      <section class="child-window group-window">
        <header class="child-title">Main</header>
        <div class="icon-grid">
          <button class="pm-icon icon-sheet" id="birthday-launch" type="button">
            <span class="pm-glyph"></span>
            <span class="pm-label">Birthday Card</span>
          </button>
          <div class="pm-icon icon-sheet">
            <span class="pm-glyph control"></span>
            <span class="pm-label">Control Panel</span>
          </div>
          <div class="pm-icon icon-sheet">
            <span class="pm-glyph printer"></span>
            <span class="pm-label">Print Manager</span>
          </div>
          <div class="pm-icon icon-sheet">
            <span class="pm-glyph clip"></span>
            <span class="pm-label">ClipBook Viewer</span>
          </div>
          <div class="pm-icon icon-sheet">
            <span class="pm-glyph msdos"></span>
            <span class="pm-label">MS-DOS Prompt</span>
          </div>
        </div>
      </section>

      <section class="child-window birthday-window">
        <header class="title-bar child-window-title">
          <div class="title-left">
            <span class="title-mark"></span>
            <span id="window-title">Birthday Card</span>
          </div>
          <div class="title-actions" aria-hidden="true">
            <span class="title-button">_</span>
            <span class="title-button">?</span>
            <span class="title-button">X</span>
          </div>
        </header>

        <div class="birthday-body">
          <section class="message-pane">
            <div class="pane-head">
              <span>System:</span>
              <span>Windows NT 3.1</span>
            </div>
            <div class="message-card">
              <p class="message-line">Feliz aniversario,</p>
              <h1 id="celebrant-heading">Thais</h1>
              <p class="subtitle" id="subtitle-message">
                Hoje o Program Manager abriu um atalho especial so para lembrar que o seu dia merece destaque.
              </p>
              <div class="signature-box">
                <span>Com amor:</span>
                <strong id="signature-message">Quem te ama</strong>
              </div>
            </div>
          </section>

          <aside class="tools-pane">
            <section class="panel-box configurator-box">
              <div class="panel-title">Settings</div>
              <form id="config-form" class="config-form">
                <label>
                  Aniversariante
                  <input id="celebrant-input" name="celebrantName" maxlength="24" />
                </label>
                <label>
                  De
                  <input id="sender-input" name="senderName" maxlength="32" />
                </label>
                <button class="win-button" type="submit">Apply</button>
              </form>
            </section>

            <section class="panel-box commands-box">
              <div class="panel-title">Actions</div>
              <div class="command-stack">
                <button class="win-button" id="open-message" type="button">Open Message</button>
                <button class="win-button" id="party-mode" type="button">Celebrate</button>
                <button class="win-button" id="restart-boot" type="button">Restart</button>
              </div>
            </section>
          </aside>
        </div>
      </section>
    </main>

    <div class="toast" id="toast" role="status" aria-live="polite"></div>
  </section>
`

const bootScreen = document.getElementById('boot-screen') as HTMLElement
const desktopShell = document.getElementById('desktop-shell') as HTMLElement
const bootStatus = document.getElementById('boot-status') as HTMLElement
const toast = document.getElementById('toast') as HTMLElement
const celebrantHeading = document.getElementById('celebrant-heading') as HTMLElement
const subtitleMessage = document.getElementById('subtitle-message') as HTMLElement
const signatureMessage = document.getElementById('signature-message') as HTMLElement
const windowTitle = document.getElementById('window-title') as HTMLElement
const configForm = document.getElementById('config-form') as HTMLFormElement
const celebrantInput = document.getElementById('celebrant-input') as HTMLInputElement
const senderInput = document.getElementById('sender-input') as HTMLInputElement
const birthdayLaunch = document.getElementById('birthday-launch') as HTMLButtonElement

const statuses = [
  'Inicializando Program Manager',
  'Carregando grupo Main',
  'Abrindo Birthday Card',
  'Interface pronta',
]

const config: BirthdayConfig = { ...defaultConfig }

celebrantInput.value = config.celebrantName
senderInput.value = config.senderName

let statusIndex = 0
const statusTimer = window.setInterval(() => {
  statusIndex = Math.min(statusIndex + 1, statuses.length - 1)
  bootStatus.textContent = statuses[statusIndex]
}, 760)

window.setTimeout(() => {
  window.clearInterval(statusTimer)
  bootScreen.style.display = 'none'
  desktopShell.classList.add('active')
  atualizarInterface()
  mostrarToast('Birthday Card carregado com sucesso.')
}, 3200)

configForm.addEventListener('submit', (event) => {
  event.preventDefault()
  config.celebrantName = limparTexto(celebrantInput.value, 'Aniversariante')
  config.senderName = limparTexto(senderInput.value, 'Quem te ama')
  celebrantInput.value = config.celebrantName
  senderInput.value = config.senderName
  atualizarInterface()
  mostrarToast('Nomes atualizados.')
})

birthdayLaunch.addEventListener('click', () => {
  mostrarToast('Atalho Birthday Card aberto.')
})

document.getElementById('open-message')?.addEventListener('click', () => {
  mostrarToast('Feliz aniversario, ' + config.celebrantName + '. Com amor, ' + config.senderName + '.')
})

document.getElementById('party-mode')?.addEventListener('click', () => {
  document.body.classList.toggle('party')
  mostrarToast('Modo comemorativo ativado.')
})

document.getElementById('restart-boot')?.addEventListener('click', () => {
  window.location.reload()
})

function atualizarInterface() {
  celebrantHeading.textContent = config.celebrantName
  subtitleMessage.textContent =
    'Hoje o Program Manager abriu um atalho especial so para lembrar que ' +
    config.celebrantName +
    ' merece um dia grande, bonito e inesquecivel.'
  signatureMessage.textContent = config.senderName
  windowTitle.textContent = 'Birthday Card - ' + config.celebrantName
}

function mostrarToast(mensagem: string) {
  toast.textContent = mensagem
  toast.classList.add('show')
  window.clearTimeout((mostrarToast as typeof mostrarToast & { timer?: number }).timer)
  ;(mostrarToast as typeof mostrarToast & { timer?: number }).timer = window.setTimeout(() => {
    toast.classList.remove('show')
  }, 2400)
}

function limparTexto(valor: string, fallback: string) {
  const texto = valor.trim().replace(/\s+/g, ' ')
  return texto || fallback
}
