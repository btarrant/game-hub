# Game Hub - React + TypeScript + Vite App

Welcome to Game Hub, a React application built with TypeScript and Vite. This app serves as a hub for video game enthusiasts, providing information about various games using the Rawg.io video game API and leveraging the Chakra UI library for a clean and responsive user interface.

Click here to view deployed app: [https://bt-game-hub.vercel.app](https://bt-game-hub.vercel.app)

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Game Search:** Search and explore a vast collection of video games.
- **Game Details:** View detailed information about a specific game, including description, release date, and platforms.
- **Responsive Design:** Utilize the Chakra UI library for a responsive and visually appealing user interface.
- **TypeScript Support:** Leverage the benefits of TypeScript for enhanced code quality and development experience.
- **Fast Development:** Utilize Vite for fast development and optimized build times.

## Getting Started

### Prerequisites

Ensure that you have the following software installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/game-hub.git
   ```

2. Navigate to the project folder:

   ```bash
   cd game-hub
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Configuration

Before running the application, you need to obtain an API key from [Rawg.io](https://rawg.io/apidocs) and configure it in the project.

1. Create a `.env` file in the root of your project.
2. Add your Rawg.io API key to the `.env` file:

   ```env
   REACT_APP_RAWG_API_KEY=your-api-key-here
   ```

## Usage

Run the application locally:

```bash
npm run dev
```

Open your browser and visit [http://localhost:5173](http://localhost:5173) to see Game Hub in action.

## Folder Structure

The project follows a standard React project structure. Key folders include:

- `src`: Contains the source code of the application.

## Dependencies

Key dependencies used in this project include:

- React
- TypeScript
- Vite
- Chakra UI
- Axios

For a detailed list of dependencies, refer to the `package.json` file.

## Contributing

Feel free to contribute to the project by opening issues or submitting pull requests. Follow the [Contributing Guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the [MIT License](LICENSE).
