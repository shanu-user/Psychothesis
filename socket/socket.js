import io from 'socket.io-client'

const SOCKET_URL ="http://localhost:4000"


class WSService {
    initializeSocket = async () => {
        try{
            this.socket = io(SOCKET_URL, {
                transports: ['websocket']
            })
            console.log("initializing socket", this.socket)

            this.socket.on("connect", (data) => {
                console.log("===socket connected===")
            })
            
            this.socket.on("disconnect", (data) => {
                console.log("===socket disconnected===")
            })
            
            this.socket.on("error", (data) => {
                console.log("===socket error===", data)
            })
        }
        catch (error) {
            console.log("socket is not initialized", error)
        }
    }

    emit(event, data={}){
        this.socket.emit(event, data)    
    }
    on(event, cb){
        this.socket.on(event, cb)
    }
    removeListener(event, data={}){
        this.socket.removeListener(event, data)
    }
}

const socketServices = new WSService()


export default socketServices