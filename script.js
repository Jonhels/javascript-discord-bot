#!/usr/bin/env node
// Token and discord classes
const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./key.json');

// Creating a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

//Log when client is ready
client.once('ready', () => {
    console.log('Ready!');
});

//Token login
client.login(token);

