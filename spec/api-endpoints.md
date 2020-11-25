# Backend APIs provided

## Conversations API

- http://localhost:8080/api/conversations/0/messages
- `GET /conversations/<id>/messages`
- messages are ordered by time
- Response shape:

  ```
  [
    {
      name: String,
      message: String,
    }
  ]
  ```

- `POST /conversations/<id>/messages`
- Expected payload shape:
  ```
  {
    name: String,
    message: String,
  }
  ```

## ConversationsList API

- http://localhost:8080/api/conversations
- `GET /conversations`
- Response shape:
  ```
  [
    {
      id: Integer,
      name: String,
      lastMessage: String,
    }
  ]
  ```
