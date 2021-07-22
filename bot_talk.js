const Slack = require('slack');
const token = process.env.SLACK_BOT_TOKEN;
const channel = process.env.SLACK_CHANNEL;

const bot = new Slack({token});

let text = process.argv[2];

bot.chat.postMessage({token:token, channel:channel, text:text}).then(console.log);
