const Slack = require('slack');
const token = process.env.SLACK_BOT_TOKEN;
const channel = process.env.SLACK_CHANNEL;
const bot = new Slack({token});

run().catch(err => console.log(err));

async function run() {
	var conversations = await bot.conversations.list({token:token});
	var conversation_history = "";
	var ts_list = [];

	conversation_history = await bot.conversations.history({token:token, channel:channel});		
	for(var i=0;i<conversation_history.messages.length;i++) {
            // Only delete messages created by the bot
	    if(typeof conversation_history.messages[i].bot_id !== 'undefined' && conversation_history.messages[i].bot_id) {
	        await bot.chat.delete({token:token, channel:channel, ts:conversation_history.messages[i].ts});
            }
	}
	
}
