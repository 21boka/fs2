async function delayMessage(callback){
    setTimeout(()=>{
        callback('delaymessage')
    },2000)
};
delayMessage((message)=>{
    console.log(message)
})