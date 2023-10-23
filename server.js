const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');  // Import the 'path' module

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'client')));

app.use(expressLayouts);
app.set('view engine', 'ejs')
app.set("views", "./client/views")
app.set("layout", "./client/layouts/mainLayout.ejs")
const httpServer = http.createServer(app);
const io = socketIo(httpServer, {
    cors: {
        origin: '*'
    },
    serveClient: true
});

app.use('/', (req, res, next) => {
    res.render('index.ejs', {
        layout: "./layouts/mainlayout",
    })
})

io.on('connection', (socket) => {
    console.log('A user connected');
});

httpServer.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
