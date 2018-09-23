import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { actionCreators } from './store'

// 同构: 一套代码React代码, 在服务器执行一次, 再在客户端执行一次
class Translation extends PureComponent {
  getList() {
    const { list } = this.props
    return list.map(item => <div key={item.get('id')}>{item.get('title')}</div>)
  }
  render() {
    const { login } = this.props
    return login ? <div>{this.getList()}</div> : <Redirect to="/" />
  }
  componentDidMount() {
    if (this.props.list.isEmpty()) {
      this.props.getTranslationList()
    }
  }
}

Translation.loadData = store => {
  return store.dispatch(actionCreators.getTranslationList())
}

const mapStateToProps = state => ({
  login: state.getIn(['header', 'login']),
  list: state.getIn(['translation', 'translationList'])
})

const mapDispatchToProps = dispatch => ({
  getTranslationList() {
    dispatch(actionCreators.getTranslationList())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Translation)
