import type {Peer} from "crossws";

const room = 'ROOM'
let userCount = 0
const peers = new Set<Peer>()

export default defineWebSocketHandler({
    open(peer) {
        userCount++
        peers.add(peer)  // Добавляем нового клиента в список
        peer.subscribe(room)

        peers.forEach((p) => {
            p.publish(room, JSON.stringify({userCount}))
        })

        peer.publish(room, JSON.stringify({userCount}))
    },
    close(peer) {
        userCount--

        peers.forEach((p) => {
            p.publish(room, JSON.stringify({userCount}))
        })
    }
})
