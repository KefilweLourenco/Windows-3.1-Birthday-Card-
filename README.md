# Birthday Card 1992 UI Experiment

A front-end experiment built in TypeScript and Vite, inspired by early 1990s Microsoft interfaces, especially the visual language of Windows NT 3.1 / Program Manager.

The project renders a retro birthday card UI with editable fields for the celebrant name and sender name, using a desktop-like composition, classic window chrome, and a boot/splash sequence before the main interface appears.

## Demo

- Video demo: [docs/demo.mp4](docs/demo.mp4)

## Technical Summary

- Stack: TypeScript, Vite, CSS
- Rendering model: DOM-driven UI generated from `src/main.ts`
- Styling approach: handcrafted CSS with retro window system layout and period-inspired typography
- Interaction model: simple client-side state updates for celebrant/sender personalization and UI actions

## AI Assistance and Manual Refactoring

This repository was developed with AI assistance during ideation, layout exploration, and implementation drafting.

The final result also involved manual refactoring and iterative code adjustments, especially in:

- layout restructuring
- visual fidelity tuning based on historical references
- spacing, overflow, and window composition corrections
- content organization for a cleaner repository presentation

In other words, this is not a raw AI dump. It is an AI-assisted prototype refined through manual technical decisions.

## Why This Project Exists

The goal of this project was to explore:

- nostalgic UI recreation with web technologies
- interface composition inspired by 1992 desktop software
- rapid prototyping with TypeScript
- practical collaboration between human review and AI-assisted generation

## Running Locally

### Requirements

- Node.js
- npm

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

Open the local URL shown by Vite, usually:

```bash
http://localhost:5173/
```

## Build

```bash
npm run build
```

Production assets are generated in `dist/`.

## Personalization

You can personalize the interface in two ways.

### 1. Through the UI

Use the fields rendered in the window:

- celebrant name
- sender name

Then click `Apply`.

### 2. Through environment variables

Create a `.env` file based on `.env.example`.

Example:

```env
VITE_CELEBRANT_NAME=Thais
VITE_SENDER_NAME=Kefilwe Lourenco
```

## Project Structure

- `src/main.ts`: UI structure and interaction logic
- `src/style.css`: full retro layout and styling rules
- `docs/demo.mp4`: recorded demonstration video
- `.env.example`: optional initial personalization values

## Notes

This project is intentionally small in scope and focused on interface experimentation rather than production architecture.

It works best as:

- a creative front-end study
- a nostalgic UI recreation exercise
- a portfolio example of AI-assisted prototyping plus manual refinement
