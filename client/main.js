const messagesDiv = document.querySelector('#messages');

const messages = [];

const client = new tmi.Client({
    connection: { reconnect: true },
    channels: ['']
});

client.connect();

client.on('message', (channel, tags, message, self) => {
    console.log(`${tags['display-name']}: ${message}`);

    createMessage(tags['display-name'], message);
});

function createMessage(username, message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');

    const usernamePara = document.createElement('p');
    usernamePara.textContent = username;

    const messagePara = document.createElement('p');
    messagePara.textContent = message;

    messageDiv.appendChild(usernamePara);
    messageDiv.appendChild(messagePara);

    messagesDiv.appendChild(messageDiv);
}