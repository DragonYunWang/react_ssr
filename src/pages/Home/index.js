import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'

// 同构: 一套代码React代码, 在服务器执行一次, 再在客户端执行一次
class Home extends PureComponent {
  getList() {
    const { list } = this.props
    return list.map(item => <div key={item.get('id')}>{item.get('title')}</div>)
  }
  render() {
    return <div>Home{this.getList()}</div>
  }
  componentDidMount() {
    this.props.getHomeList()
  }
}

const mapStateToProps = state => ({
  list: state.getIn(['home', 'homeList'])
})

const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(actionCreators.getHomeList())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
