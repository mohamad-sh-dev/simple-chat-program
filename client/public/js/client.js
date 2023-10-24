const socket = io('http://localhost:3000');
socket.on('connect', (data) => {
    console.log(data);
    document.getElementById('submitBtn').addEventListener('click', () => {
        const message = document.getElementById('messageBox').value
        socket.emit('newMessage', message)
    })

})
socket.on('serverMessage', (data) => {
    console.log(data);
    message = data;
    if ($.trim(message) == '') {
        return false;
    }
    $('<li class="sent"><img src="http://emilcarlsson.se/assets/mikeross.png" alt="" /><p>' + message + '</p></li>').appendTo($('.messages ul'));
    $('.message-input input').val(null);
    $('.contact.active .preview').html('<span>You: </span>' + message);
    $(".messages").animate({ scrollTop: $(document).height() }, "fast");
})


