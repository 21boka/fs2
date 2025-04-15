const WebSocket= require ('ws')

const ws=new WebSocket("ws://localhost:8081")

ws.on('open',()=>{
    console.log('connected to server')


ws.send("hello,server!")
});

ws.on('message',(message)=>{
    console.log(`Message Recived from server:${message}`)
});