# ☠️ Secret Hitler

A modern, responsive, single-device web companion app designed to facilitate local, in-person games of the popular social deduction game Secret Hitler.

**This application is specifically designed to be passed around on a single phone or tablet at the table**, completely eliminating the need for separate physical role cards or an external narrator. It handles player configuration, randomized role distribution, and coordinates the essential night (sleep) phase instructions on one shared screen.

## Features

- **Single-Device Focus**: Perfect for game nights. Just input everyone's names on one phone, pass it around to reveal roles, and place it in the center of the table for the night phase.

- **Dynamic Lobby Management**: Supports 5 to 10 players, automatically assigning unique fallback color indicators to prevent confusion during character creation.

- **Smart Night Phase Scripting**: Dynamically alters the onscreen step-by-step narrator instructions based on your team size. It properly accounts for whether Hitler knows their fellow fascists (5-6 players) or stays blind with a raised thumb (7-10 players).

## Tech Stack

- **Framework**: React 19 (TypeScript)
- **Build Core**: Vite
- **State Management**: Zustand
- **Styling**: Tailwind CSS v4
- **Routing Engine**: React Router
- **UI Components**: Built on shadcn/ui with Radix Primitives and lucide-react icons.

## Game Configurations & Logic

The companion app automatically seeds roles according to the exact math dictated by the official rules of Secret Hitler:

| Total Players | Liberals | Fascists | Hitler | Night Phase Mechanics                                                                |
| ------------- | -------- | -------- | ------ | ------------------------------------------------------------------------------------ |
| **5**         | 3        | 1        | 1      | Small Team: Fascists and Hitler open eyes together to recognize each other.          |
| **6**         | 4        | 1        | 1      | Small Team: Fascists and Hitler open eyes together to recognize each other.          |
| **7**         | 4        | 2        | 1      | Big Team: Fascists recognize each other; Hitler keeps eyes closed but raises a hand. |
| **8**         | 5        | 2        | 1      | Big Team: Fascists recognize each other; Hitler keeps eyes closed but raises a hand. |
| **9**         | 5        | 3        | 1      | Big Team: Fascists recognize each other; Hitler keeps eyes closed but raises a hand. |
| **10**        | 6        | 3        | 1      | Big Team: Fascists recognize each other; Hitler keeps eyes closed but raises a hand. |

## Setup and Installation

Ensure you have Node.js v22+ installed on your system.

1. **Clone the project repository:**

```bash
git clone https://github.com/TockePie/secret-hilter.git
cd secret-hitler

```

2. **Install project node_modules:**

```bash
npm install

```

3. **Boot the local development framework:**

```bash
npm run dev

```

4. Access the server via your browser at `http://localhost:5173`.
