const socket = io('http://localhost:3000');
socket.on('connect', (data) => {
    console.log(data);
})