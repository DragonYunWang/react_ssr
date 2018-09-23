import express from 'express'
import proxy from 'express-http-proxy'
import { matchRoutes } from 'react-router-config'
import { getServerStore } from '../store'
import routes from '../Routes'
import render from './utils'
// 客户端渲染
// React代码在浏览器上执行, 消耗的是用户浏览器的性能

// 服务端渲染
// React代码在服务器上执行, 消耗的是服务器端的性能
const app = express()

// 使用静态资源文件
app.use(express.static('public'))

// 服务器代理
// /api/news.json
// req.url = new.json
// proxyReqPathResolver: /ssr/api/news.json
// http://47.95.113.63 + proxyReqPathResolver()
// http://47.95.113.63/ssr/api/news.json
app.use(
  '/api',
  proxy('http://47.95.113.63', {
    proxyReqPathResolver: function(req) {
      return '/ssr/api' + req.url
    }
  })
)

app.get('*', (req, res) => {
  // 创建 store
  const store = getServerStore(req)
  // 匹配多级路由
  const matchedRoutes = matchRoutes(routes, req.path)
  const promised = []
  // 遍历 matchedRoutes 获取数据
  matchedRoutes.map(item => {
    if (item.route.loadData) {
      promised.push(item.route.loadData(store))
    }
  })
  // 让promised执行一次
  Promise.all(promised).then(() => {
    res.send(render(req, routes, store))
  })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
