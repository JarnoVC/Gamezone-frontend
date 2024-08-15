# GameZone Frontend

This is the frontend application for **GameZone**, a web platform that allows users to browse and manage games, products, and orders. The frontend is built using Vue 3 and Vite, providing a modern and fast development experience.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Project Setup](#project-setup)
5. [Running the Project](#running-the-project)
6. [Environment Variables](#environment-variables)
7. [Folder Structure](#folder-structure)
8. [Recommended IDE Setup](#recommended-ide-setup)
9. [Contributing](#contributing)
10. [License](#license)
11. [Contact](#contact)

## Project Overview

The **GameZone Frontend** is a Vue.js application that interacts with the GameZone API. It provides an interface for users to view products, place orders, and manage order statuses in real time.

## Features

- **Product Management**: View and interact with game products.
- **Order Management**: Create and manage orders, including real-time status updates.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Real-time Updates**: Real-time order status updates using WebSocket.

## Tech Stack

- **Vue 3**: JavaScript framework for building user interfaces.
- **Vite**: Next-generation frontend tooling for fast development.
- **Axios**: For making HTTP requests to the backend API.
- **Socket.IO**: For real-time communication with the backend.

## Project Setup

To set up the project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/gamezone-frontend.git
cd gamezone-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of the project to manage environment-specific variables. Example:

```plaintext
VITE_API_BASE_URL=http://localhost:3000/api/v1
VITE_SOCKET_URL=http://localhost:3000
```

- `VITE_API_BASE_URL`: The base URL for the GameZone API.
- `VITE_SOCKET_URL`: The URL for the WebSocket server.

## Running the Project

### Compile and Hot-Reload for Development

To run the project in development mode with hot reloading:

```bash
npm run dev
```

### Compile and Minify for Production

To build the project for production:

```bash
npm run build
```

### Preview the Production Build

To locally preview the production build:

```bash
npm run preview
```

## Folder Structure

A brief overview of the project structure:

```plaintext
src/
├── assets/         # Static assets (images, fonts, etc.)
├── components/     # Vue components
├── views/          # Page views
├── router/         # Vue Router setup
├── store/          # Vuex or Pinia state management
├── api/            # API request functions
├── sockets/        # WebSocket setup and handling
├── App.vue         # Main app component
└── main.js         # Entry point of the application
```

## Recommended IDE Setup

- **[VSCode](https://code.visualstudio.com/)** with:
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur)

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch with a descriptive name.
3. Make your changes.
4. Submit a pull request with a detailed description of your changes.
5. Please also take a look at the back-end code repo: https://github.com/JarnoVC/Gamezone
