if (process.env.NODE_ENV !== 'production') {
    // checking if running in production environment.
    // NODE_ENV will be set by node automatically if so

    // loading dotenv vars to process.env
    require('dotenv').config();
}

process.env.NTBA_FIX_319 = 1;

// [ BOT CONFIG ]

const TelegramBot = require('node-telegram-bot-api');
const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, {polling: true});

// [ DB CONFIG ]

const mongoose = require('mongoose');
// connecting DB to env variable
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true }).catch(error => {
    console.error(error);
});

// accessing connection to DB
const db = mongoose.connection;

db.on('error', error => console.error(error));
db.once('open', () => console.info('Connected to Mongoose DB!'));

module.exports = {bot, db};