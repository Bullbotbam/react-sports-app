const express = require('express');

const http = require('http');
const socketIO = require('socket.io');

const server = http.createServer(app);
const io = socketIO(server);

const mongoose = require('mongoose');
const userRoutes = require('./routes/users');

const app = express();
const PORT = 3001;

// Socket connection
io.on('connection', (socket) => {
  console.log('New client connected');

  // Handle incoming messages
  socket.on('message', (message) => {
    console.log('Received message:', message);

    // Broadcast the message to all connected clients
    io.emit('message', message);
  });

  // Handle client disconnection
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost/sports-team-website', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });

// Middleware
app.use(express.json());

// Routes
app.use('/users', userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});







