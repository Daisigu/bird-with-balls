import type {Peer} from "crossws";

const room = 'ROOM'
let userCount = 0
const peers = new Set<Peer>()

export default defineWebSocketHandler({
    open(peer) {
        userCount++
        console.log('ws connection open at', new Date().toLocaleString(), peer.id)
        peers.add(peer)  // Добавляем нового клиента в список
        peer.subscribe(room)

        peers.forEach((p) => {
            p.publish(room, JSON.stringify({userCount}))
        })

        peer.publish(room, JSON.stringify({userCount}))
    },
    close(peer) {
        userCount--
        console.log('ws connection closed', peer.id)
        peers.forEach((p) => {
            p.publish(room, JSON.stringify({userCount}))
        })
    }
})
