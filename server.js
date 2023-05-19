const http = require('http');
const fs = require('fs')
const path = require('path');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        const htmlPath = path.join(__dirname,'public','index.html');
        const html = fs.readFileSync(htmlPath,'utf8');
        res.setHeader('Content-Type','text/html');
        res.write(html);
        res.end();
    }
    else if(req.url.endsWith('.js')){
        const jsPath = path.join(__dirname,'src',req.url);
        const js = fs.readFileSync(jsPath,'utf8');
        res.setHeader('Content-Type','application/javascript');
        res.write(js);
        res.end();
    }
    else if(req.url.endsWith('.mjs')){
        const jsPath = path.join(__dirname,'src',req.url);
        const js = fs.readFileSync(jsPath,'utf8');
        res.setHeader('Content-Type','application/javascript');
        res.write(js);
        res.end();
    }
    else if(req.url.endsWith('.css')){
        const csspath = path.join(__dirname,'src',req.url);
        const css = fs.readFileSync(csspath,'utf8');
        res.setHeader('Content-Type','text/css');
        res.write(css);
        res.end();
    }
    // else if(req.url === '/xazzwebtest'){
    //     res.writeHead(200);
    //     res.end({"ok":"xazzapi"})
    // }
    else{
        const lnk = req.url;
        // Router.openRoute(lnk)
        const htmlPath = path.join(__dirname,'public','index.html');
        const html = fs.readFileSync(htmlPath,'utf8');
        res.setHeader('Content-Type','text/html');
        res.write(html);
        res.end();
    }
})


server.listen(3000, ()=>{
    console.log("😃 Your Website is being hosted ✨")
    console.log("🎇 http://localhost:3000/")
})