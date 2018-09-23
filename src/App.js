import React from 'react'
import { renderRoutes } from 'react-router-config'

const App = props => {
  return (
    <div>
      {/* 用于显示二级路由的内容 */}
      {renderRoutes(props.route.routes)}
    </div>
  )
}

export default App
