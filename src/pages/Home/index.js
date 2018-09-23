import React, { PureComponent } from 'react'

// 同构: 一套代码React代码, 在服务器执行一次, 再在客户端执行一次
class Home extends PureComponent {
  render() {
    return <div>Home</div>
  }
}

export default Home
