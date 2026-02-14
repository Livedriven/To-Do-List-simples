/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Essencial para ativar via classe no HTML
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      // Suas pecinhas de Lego personalizadas
      fundo: 'var(--cor-fundo)',
      card: 'var(--cor-card)',
      borda: 'var(--cor-borda)',
      'texto-base': 'var(--cor-texto-principal)',
      'texto-sub': 'var(--cor-texto-secundario)',
      primaria: 'var(--cor-primaria)',
      'primaria-hover': 'var(--cor-primaria-hover)',
      sucesso: 'var(--cor-sucesso)',
      erro: 'var(--cor-erro)',
      branco: '#FFFFFF', // utilitário fixo
    },
  },
  plugins: [],
}

