// import React from 'react'
// import { Route } from 'react-router-dom'
import App from './App'
import Home from './pages/Home/'

// 修改路由配置,支持服务端获取数据
// 多级路由支持

export default [
  {
    path: '/',
    component: App,
    loadData: App.loadData,
    routes: [
      {
        path: '/',
        component: Home,
        exact: true,
        loadData: Home.loadData,
        key: 'Home'
      }
    ]
  }
]

// export default (
//   <div>
//     <Route to="/" component={Home} />
//   </div>
// )
