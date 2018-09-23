// import React from 'react'
// import { Route } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Translation from './pages/Translation'

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
      },
      {
        path: '/translation',
        component: Translation,
        exact: true,
        loadData: Translation.loadData,
        key: 'Translation'
      }
    ]
  }
]

// export default (
//   <div>
//     <Route to="/" component={Home} />
//   </div>
// )
