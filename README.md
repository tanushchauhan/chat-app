# Chat App

This is a simple chat app with a single chat room. Anyone can go to the website, log in with an identifier, and send messages.

## Run Locally

Make sure you have node js installed before proceeding.

Clone the project

```bash
  git clone https://github.com/tanushchauhan/chat-app.git
```

Go to the project directory

```bash
  cd chat-app
```

Install dependencies

```bash
  npm install
```

Build the app

```bash
  npm run build
```

Start the server

```bash
  npm start
```

You will also need to set up a database in Superbase and ensure real-time subscribing for insert queries is enabled. You will also need to change the key and URL in the application code.

## API Reference

#### Get last 50 messages

```http
  GET /api/chats
```

#### Send a message

```http
  POST /api/chats
```

| Body content          | Type     | Description                                                                            |
| :-------------------- | :------- | :------------------------------------------------------------------------------------- |
| `{ sender, content }` | `string` | **Required**. The identifier of the sender as sender and the message itself as content |

## Authors

- [@tanushchauhan](https://github.com/tanushchauhan)

## Screenshots

![App Screenshot](https://raw.githubusercontent.com/tanushchauhan/chat-app/main/screenshots/1.png)

![App Screenshot](https://raw.githubusercontent.com/tanushchauhan/chat-app/main/screenshots/2.png)

![App Screenshot](https://raw.githubusercontent.com/tanushchauhan/chat-app/main/screenshots/3.png)
