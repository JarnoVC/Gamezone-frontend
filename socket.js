// In a central location, like main.js or a dedicated plugin file
import { io } from 'socket.io-client';

// Create a Socket.io instance
const socket = io('https://gamezone-api.onrender.com/'); // Replace with your server's URL

export default socket;