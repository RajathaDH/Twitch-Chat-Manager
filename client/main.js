const client = new tmi.Client({
    connection: { reconnect: true },
    channels: ['polen']
});

client.connect();

client.on('message', (channel, tags, message, self) => {
    console.log(`${tags['display-name']}: ${message}`);
});