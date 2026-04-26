/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CELEBRANT_NAME?: string
  readonly VITE_SENDER_NAME?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
