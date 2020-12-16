const https = require('https');
const net = require('net');
const tls = require('tls');

const getwsopts = {
    "method":"GET",
    "hostname":"discord.com",
    "path":"/api/gateway/bot",
    "headers":{
        'Authorization':"Bot no"
    }    
}
const wsopts = {
    port:443,
    host:'gateway.discord.gg'
}
var datas;
function sockinit(endpoint){
    const sock = tls.connect(wsopts,()=>{
        console.log('connected')
        process.stdin.pipe(sock);
    });
   
    sock.on('session',(d)=>{
        console.log('data:',d.toString());
    });

}
const getws = https.request(getwsopts,(wsres)=>{
    wsres.on('data',(wsd)=>{
        var endpoint = JSON.parse(wsd.toString());
        console.log(endpoint);
        sockinit(endpoint);
    });
    wsres.on('end',()=>{
        console.log('Endpoint Recived');
        
        
    });

});
getws.end();
