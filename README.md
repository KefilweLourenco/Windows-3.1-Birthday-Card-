 🎂 Windows 3.1 Birthday Card

> "Hoje o Program Manager abriu um atalho especial..."

Este projeto é uma experiência interativa inspirada na interface clássica do **Windows NT 3.1 / Program Manager**, recriada para apresentar uma mensagem de aniversário personalizada em estilo retrô.

A proposta foi explorar composição visual inspirada em softwares de 1992, com foco em **tipografia**, **estrutura de janelas**, **hierarquia visual**, **interação simples** e **fidelidade estética** de interfaces legadas.

---

## 🚀 Demonstração

Vídeo de demonstração do projeto:

[Demo em vídeo](https://github.com/user-attachments/assets/556db026-44f0-4521-b5bf-9ab56a310426)

---

## 🛠️ Tecnologias e conceitos

- **TypeScript + Vite:** estrutura leve para desenvolvimento rápido e organização da interface
- **CSS puro:** construção manual da estética visual inspirada em sistemas Windows do início dos anos 90
- **Manipulação de DOM:** atualização dinâmica dos campos de aniversariante e remetente
- **Animação de boot:** simulação de inicialização com barra de progresso e transição para a interface principal
- **Composição de UI retrô:** barras de título, janelas filhas, menu superior, grupos de atalhos e caixas de configuração

---

## 🧠 Processo de desenvolvimento

Este projeto foi desenvolvido com apoio do **Codex (OpenAI)** como ferramenta de prototipação, exploração de layout e assistência técnica durante a implementação.

A partir dessas interações, o código passou por **refatoração manual**, revisão visual, ajustes de estrutura e correções guiadas até chegar na versão final publicada neste repositório.

Ou seja, o projeto foi construído em um fluxo de **desenvolvimento assistido por IA + direção humana + refinamento manual**, com foco em aprendizado, experimentação visual e melhoria contínua da interface.

---

## 📂 Estrutura da interface

1. **Boot Screen**  
   Simula a inicialização de um ambiente Windows NT 3.1 com barra de carregamento e splash retrô.

2. **Program Manager**  
   Tela principal inspirada no gerenciador de programas clássico, com barra de menu e grupo de atalhos.

3. **Birthday Card Window**  
   Janela principal que apresenta a mensagem de aniversário personalizada.

4. **Settings / Actions**  
   Painéis laterais que permitem alterar o nome do aniversariante e do remetente, além de acionar interações da interface.

---

## ⚙️ Como executar localmente

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/Windows-3.1-Birthday-Card.git
Acesse a pasta do projeto

cd Windows-3.1-Birthday-Card
Instale as dependências

npm install
Inicie o ambiente de desenvolvimento

npm run dev
Abra no navegador
Normalmente o Vite disponibiliza o projeto em:

http://localhost:5173/
🧪 Personalização
A interface permite personalização em tempo real por meio dos campos:

nome do aniversariante
nome de quem está enviando
Também é possível definir valores iniciais com base no arquivo .env.example.

Exemplo:

VITE_CELEBRANT_NAME=Thais
VITE_SENDER_NAME=Kefilwe Lourenco
🧱 Estrutura do projeto
src/main.ts
Estrutura principal da interface, eventos e atualização dinâmica dos dados.

src/style.css
Toda a estilização do layout retrô, janelas, menus, painéis e animações.

docs/demo.mp4
Vídeo de demonstração do projeto rodando.

.env.example
Exemplo de configuração inicial para personalização dos nomes.

🎯 Objetivo do projeto
Como exercício técnico e criativo, este projeto foi útil para praticar:

recriação de interfaces históricas com HTML, CSS e TypeScript
controle visual de layout com inspiração em software legado
experimentação com prototipação assistida por IA
refatoração manual de código gerado
transformação de uma ideia pessoal em um artefato apresentável para portfólio

👨‍💻 Desenvolvido por Kefilwe Lourenço

⚠️ Aviso
Este projeto é um experimento visual e educacional, sem qualquer vínculo oficial com a Microsoft.

