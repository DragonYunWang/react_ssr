import React from 'react'
import { renderRoutes } from 'react-router-config'
import Header from './common/Header'
import { actionCreators } from './common/Header/store'

const App = props => {
  return (
    <div>
      <Header />
      {/* 用于显示二级路由的内容 */}
      {renderRoutes(props.route.routes)}
    </div>
  )
}

App.loadData = store => {
  return store.dispatch(actionCreators.getHomeInfo())
}

export default App
