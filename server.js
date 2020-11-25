var express    = require('express')
var app        = express()
var bodyParser = require('body-parser')
var shortid = require('shortid')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var port = process.env.PORT || 8080

var router = express.Router()

// Unsafely enable cors
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

// logging middleware
router.use(function(req, res, next) {
    console.log('\nReceived:',{url: req.originalUrl, body: req.body, query: req.query})
    next()
})

// Simple in memory database
const database = [
  {
    user: 'Mario',
    id: 0,
    messages: [
      {
        name: 'You',
        message: 'Hey, how are you?',
        id: 'gg35545',
        reaction:
        null
      },
      {
        name: 'Mario',
        message: 'Doing well, yourself?',
        id: 'yy35578',
        reaction: null
      }
    ]
  },
  {
    user: 'Brandon',
    id: 1,
    messages: [
      {
        name: 'You',
        message: 'Hey, how are you?',
        id: 'gg35545',
        reaction:
        null
      },
      {
        name: 'Bradon',
        message: 'Doing well, yourself?',
        id: 'yy35578',
        reaction: null
      }
    ]
  },
]

// Utility functions
const findConversation = (conversationId) => {
  const conversation = database.find((conversation) => {
    return conversation.id === parseInt(conversationId)
  })
  if (conversation === undefined){
    return {error: `a conversation with id ${conversationId} does not exist`}
  }
  return conversation
}

const findConversationIndex = (conversationId) => {
  const conversationIndex = database.findIndex((conversation) => {
    return conversation.id === parseInt(conversationId)
  })
  return conversationIndex
}

const findMessageIndex = (conversation, messageId) => {
  const messageIndex = conversation.messages.findIndex((message) => {
    return message.id === messageId
  })
  return messageIndex
}

const logUser = (conversation, username) => {
  const userNotLogged = !conversation.users.find((user) => {
    return user === username
  })

  if (userNotLogged) {
    conversation.users.push(username)
  }
}

// API Routes
router.get('/conversations', function(req, res) {
  const conversations = database.map((conversation) => {
    return {
      user: conversation.user,
      id: conversation.id,
      lastMessage: conversation.messages[conversation.messages.length - 1]
    }
  })
  console.log('Response:',conversations)
  res.json(conversations)
})

router.route('/conversations/:conversationId/messages')
  .get(function(req, res) {
    conversation = findConversation(req.params.conversationId)
    if (conversation.error) {
      console.log('Response:',conversation)
      res.json(conversation)
    } else {
      console.log('Response:',conversation.messages)
      res.json(conversation.messages)
    }
  })
  .post(function(req, res) {
    conversation = findConversation(req.params.conversationId)
    if (conversation.error) {
      console.log('Response:',conversation)
      res.json(conversation)
    } else if (!req.body.name || !req.body.message) {
      console.log('Response:',{error: 'request missing name or message'})
      res.json({error: 'request missing name or message'})
    } else {
      conversation.messages.push({name: req.body.name, message: req.body.message, id: shortid.generate(), reaction: null})
      console.log('Response:',{message: 'OK!'})
      res.json({message: 'OK!'})
    }
  })

  router.route('/conversations/:conversationId/messages/:messageId')
    .post(function(req, res) {
      conversation = findConversation(req.params.conversationId)
      if (conversation.error) {
        console.log('Response:',conversation)
        res.json(conversation)
      } else {
        messageIndex = findMessageIndex(conversation, req.params.messageId)
        if (messageIndex === -1){
          res.json({error: `a message with id ${req.params.messageId} does not exist`})
        } else {
          const conversationIndex = findConversationIndex(req.params.conversationId)
          console.log({conversationIndex, messageIndex})
          if(req.body.name !== undefined) {
            database[conversationIndex].messages[messageIndex].name = req.body.name
          }
          if(req.body.message !== undefined) {
            database[conversationIndex].messages[messageIndex].message = req.body.message
          }
          res.json({message: 'OK!'})
        }
      }
    })

app.use('/api', router)
app.listen(port)
console.log(`API running at localhost:${port}/api`)
