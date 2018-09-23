import React from 'react'
import express from 'express'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import routes from '../Routes'
// 客户端渲染
// React代码在浏览器上执行, 消耗的是用户浏览器的性能

// 服务端渲染
// React代码在服务器上执行, 消耗的是服务器端的性能
const app = express()

// 使用静态资源文件
app.use(express.static('public'))

app.get('*', (req, res) => {
  const content = renderToString(<StaticRouter context={{}}>{routes}</StaticRouter>)
  res.send(
    `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>React Server</title>
    </head>
    
    <body>
      <div id="root">${content}</div>
      <script src="/index.js"></script>
    </body>
    
    </html>`
  )
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
