import express from 'express'
import { Socket } from 'socket.io'

const app = express()

const io = Socket(app)

const PORT = 5000


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})