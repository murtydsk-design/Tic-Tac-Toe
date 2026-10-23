# 🎮 Neon Cyber Tic-Tac-Toe

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)

A sleek, retro arcade-inspired **Tic-Tac-Toe** web game featuring a glowing cyberpunk color palette, 8-bit typography, and responsive animations.

[**Live Demo / Features**](#-key-features) • [**How to Play**](#-how-to-play) • [**Code Structure**](#-code-architecture--logic) • [**Local Setup**](#-getting-started-locally)

</div>

---

## 🕹️ Overview

**Neon Cyber Tic-Tac-Toe** is a modern take on the classic 3x3 strategy game. Designed with a dark retro aesthetic, neon cyan accents (`#00f3ff`), and the nostalgic **Press Start 2P** pixel font, this project demonstrates clean, modular vanilla web development without heavy external frameworks.

```
       0     1     2
    ┌─────┬─────┬─────┐
 0  │  O  │  X  │  O  │
    ├─────┼─────┼─────┤
 1  │  X  │  O  │  X  │
    ├─────┼─────┼─────┤
 2  │  O  │     │     │   ==> Player 'O' Wins Diagonally!
    └─────┴─────┴─────┘
```

---

## ✨ Key Features

- **👾 Retro Arcade Cyberpunk Theme**: Styled with neon glows, 3D stepped text bevels, and sleek dark surfaces (`#121212` & `#1b1c22`).
- **📱 Fully Responsive Layout**: Built using CSS viewport-minimum (`vmin`) units to scale cleanly across mobile, tablet, and desktop screens.
- **⚡ Interactive Micro-Animations**: Smooth hover transitions, tactile button press-down feedback, and glowing box states.
- **🧠 Instant Win & Draw Detection**: Real-time evaluation against 8 possible winning combinations after every move.
- **🔄 One-Click Reset**: Instant board clearing and state reset to jump right back into the action.
- **🚀 Pure Vanilla Stack**: Zero external runtime dependencies—runs instantly in any modern browser.

---

## 🎮 How to Play

1. **Player Turns**: The game begins with **Player O**. Players alternate turns placing **O** and **X** onto the 3x3 grid.
2. **Winning**: The first player to align 3 of their symbols horizontally, vertically, or diagonally wins the match.
3. **Draw**: If all 9 tiles are occupied without a 3-in-a-row combination, the game declares a **Draw**.
4. **Restart**: Click the **Reset** button anytime to start a fresh match.

---

## 🧩 Code Architecture & Logic

The project is structured into three decoupled files for clean separation of concerns:

```
tic-tac-toe/
├── index.html     # Semantic DOM hierarchy & game board markup
├── style.css      # Retro arcade aesthetics, cyan lighting, & layout
├── app.js         # Game state machine, win matrix, & event handling
└── README.md      # Project documentation
```

### 1. `app.js` — Core Game Engine

The game logic is powered by a state machine that tracks the current turn and active move counts:

- **State Variables**:
  - `turnO`: Boolean flag tracking whose turn it is (`true` for **O**, `false` for **X**).
  - `count`: Integer counter tracking the number of completed moves (up to 9).
- **Winning Combinations Matrix**:
  ```javascript
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];
  ```
- **Algorithms**:
  - `checkWin()`: Iterates through `winPatterns` to verify if all three indices match and are non-empty. Returns `true` if a match is found and triggers `showWinner()`.
  - `gameDraw()`: Triggers when `count === 9` and `!checkWin()`.
  - `resetGame()`: Clears the board, enables all buttons, resets `count` to `0`, sets `turnO = true`, and hides the banner.

### 2. `style.css` — Visual Design System

- **Typography**: Google Font `Press Start 2P` delivers an authentic 8-bit arcade experience.
- **Color Palette**:
  - Background: `#121212` (Deep Void)
  - Card/Grid Plate: `#1b1c22`
  - Tiles: `#1a2130` with subtle border `rgba(0, 243, 255, 0.15)`
  - Primary Accent: `#00f3ff` (Electric Cyan)
- **3D Bevel Text**:
  ```css
  text-shadow:
    2px 2px 0px #00f3ff,
    4px 4px 0px #0e7490,
    6px 6px 0px #164e63,
    0 0 25px rgba(0, 243, 255, 0.6);
  ```

### 3. `index.html` — Accessible Structure

- Uses semantic `<main>` and container wrappers.
- Employs `<button class="box">` elements for keyboard and screen-reader accessibility, equipped with native `disabled` state handling when a cell is filled.

---

## 🚀 Getting Started Locally

### Quick Run
Simply double-click `index.html` or run in your terminal:
```bash
open index.html
```

### Using a Local Server
Run a lightweight HTTP server using Python or Node:

```bash
# Python 3
python3 -m http.server 8000

# Or using Node
npx serve .
```
Then navigate to `http://localhost:8000` in your browser.

---

## 🛠️ Tech Stack

- **HTML5** — Document layout & structure
- **CSS3** — Grid system, Flexbox, CSS variables & keyframe lighting
- **JavaScript (ES6+)** — Event listeners, array destructuring, DOM manipulation
- **Google Fonts** — `Press Start 2P`

---

## 👤 Author

- **GitHub**: [@murtydsk-design](https://github.com/murtydsk-design)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
