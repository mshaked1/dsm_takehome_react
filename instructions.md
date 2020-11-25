## Instructions to run (no changes)

1. `npm intall` for all dependencies 
2. `npm run start` to run the app
3. `npm run api-server` to run the server


## Intent

This app separates chat messages into whether the most recent message has been reacted to/seen or now, and provides a chat box for the user to see the chat history and interact with the other user.
A chat is considered read once it is clicked on.
The chat box scrolls to the bottom whenever a new message is added to the chat.
For timing purposes, all CSS was put into one file.

I used Create React App and Redux Toolkit to complete the challenge.


## Possible future enhancements

1. Adding a websocket server that would make this a truly two-sided chat app
2. Images, logos and other assets to sprucve up the design
3. Time stamps on individual messages to mimic a real chat app
4. Social media handles
5. Emoji support