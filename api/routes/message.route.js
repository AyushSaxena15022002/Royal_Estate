import express from 'express'
import { addMessage } from '../controllers/message.controller.js'
import { verifyToken } from '../middlewares/verifyToken.js'
const router = express.Router()

router.post('/:chatId', verifyToken, addMessage)

export default router
