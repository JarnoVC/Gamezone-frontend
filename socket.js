// In a central location, like main.js or a dedicated plugin file
import { io } from 'socket.io-client';

// Create a Socket.io instance
const socket = io('http://localhost:3000'); // Replace with your server's URL

export default socket;