const WebSocket= require ('ws')

const wss= new WebSocket.Server({port:8081})

wss.on('connection',(ws)=>{
  console.log('client Connected')

  ws.on ('message',(message)=>{
    console.log(`Recived: ${message}`)
});

ws.on('close',()=>{
    console.log('connection disconnected')
});
});
