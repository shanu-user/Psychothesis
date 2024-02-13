import express from 'express'
import { Server } from 'socket.io'
import http from 'http'
import mysql from 'mysql2/promise'


const pool = mysql.createPool({
    host: process.env.HOST,
    user:  process.env.USER,
    password: process.env.PASS,
    database: process.env.DB,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

const app = express()
const server = http.createServer(app)
const io = new Server(server)
const PORT = process.env.PORT || 4000


io.on('connect', (socket) => {
    console.log('A new client connected')

    socket.on('disconnect', () => {
        console.log('Client disconnected')
    })
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

export default pool