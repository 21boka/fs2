const fs=require('fs')

const stream= fs.createReadStream('data.txt','utf8')
stream.on ('data',(chunk)=>{
    console.log(`recived chunk:${chunk}`)
});

stream.on('end',()=>{
    console.log('end of the stream')    
});