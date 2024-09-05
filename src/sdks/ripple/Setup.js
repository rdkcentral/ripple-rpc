if (!window.__firebolt) window.__firebolt = {}

window.__firebolt.mockTransportLayer = true
window.__firebolt.automation = true

let sendListener
let receiver

export const transport = {
    send: function(message) {
        const json = JSON.parse(message)
        sendListener && sendListener(json)
    },
    receive: function(callback) {
        receiver = callback
    },
    onSend: function(listener) {
        sendListener = listener
    },
    response: function(id, result) {
        let response = {
            jsonrpc: '2.0',
            id: id,
            result: result
        }
        receiver && receiver(JSON.stringify(response))
    }
}

window.__firebolt.setTransportLayer(transport)
