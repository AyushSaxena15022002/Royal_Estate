// import { Server } from 'socket.io'

// const io = new Server({
//   cors: {
//     origin: 'http://localhost:5173',
//   },
// })

// let onlineUser = []

// const addUser = (userId, socketId) => {
//   const userExists = onlineUser.find((user) => user.userId === userId)
//   if (!userExists) {
//     onlineUser.push({ userId, socketId })
//   }
// }

// const removeUser = (socketId) => {
//   onlineUser = onlineUser.filter((user) => user.socketId !== socketId)
// }

// const getUser = (userId) => {
//   return onlineUser.find((user) => user.userId === userId)
// }

// io.on('connection', (socket) => {
//   socket.on('newUser', (userId) => {
//     addUser(userId, socket.id)
//   })

//   socket.on('sendMessage', ({ recieverId, data }) => {
//     const reciever = getUser(recieverId)
//     io.to(reciever.socketId).emit('getMessage', data)
//   })

//   socket.on('disconnect', () => {
//     removeUser(socket.id)
//   })
// })

// io.listen('4000')

import { Server } from 'socket.io'
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT || 4000

const io = new Server({
  cors: {
    origin: 'https://royal-estate.netlify.app',
    methods: ['GET', 'POST'],
    credentials: true,
  },
})

let onlineUser = []

const addUser = (userId, socketId) => {
  const userExists = onlineUser.find((user) => user.userId === userId)
  if (!userExists) {
    onlineUser.push({ userId, socketId })
  }
}

const removeUser = (socketId) => {
  onlineUser = onlineUser.filter((user) => user.socketId !== socketId)
}

const getUser = (userId) => {
  return onlineUser.find((user) => user.userId === userId)
}

io.on('connection', (socket) => {
  socket.on('newUser', (userId) => {
    addUser(userId, socket.id)
  })

  socket.on('sendMessage', ({ recieverId, data }) => {
    const reciever = getUser(recieverId)
    if (reciever) {
      io.to(reciever.socketId).emit('getMessage', data)
    }
  })

  socket.on('disconnect', () => {
    removeUser(socket.id)
  })
})

io.listen(port)
