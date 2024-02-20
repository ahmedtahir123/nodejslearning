import express from 'express';
import http from 'http';
import { Server, Socket } from 'socket.io';
import path from 'path';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/socket.io', express.static(path.join(__dirname, 'node_modules', 'socket.io', 'client-dist')));

// Handle socket connections
io.on('connection', (socket: Socket) => {
    console.log('Client connected:', socket.id);

    // Listen for messages from client
    socket.on('message', (message: string) => {
        console.log('Message received:', message);
        // Broadcast the message to all clients
        io.emit('message', message);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
