# slack smacker

1. Clone this

2. Edit `slack.env` and enter your own bot tokens, etc

3. Send some test messages (optional): 

`node bot_talk.js 'blahblah blah'`

4. Delete messages:

`node delete_all_msg.js`

It will only delete the bot messages associated with the bot token. You will need to delete the other user messages manually.
