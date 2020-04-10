const express = require('express')
const vueApp = require('./src/app.js')
let path = require('path')
const vueServerRender = require('vue-server-renderer').createRenderer({
    template:require('fs').readFileSync(path.join(__dirname, './index.html'), 'utf-8')
})

const app = express()
app.get('*', (request, respones) => {
    let  vm = vueApp({})
    respones.status(200);
    respones.setHeader('Content-Type', 'text/html;charset-utf-8;')
    vueServerRender.renderToString(vm).then((html) => {
        respones.end(html);
    }).catch(error => console.log(error))
})

app.listen(3000, ()=> {
    console.log('服务器已启动')
})
