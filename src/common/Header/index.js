import React, { PureComponent, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreators } from './store'
class Header extends PureComponent {
  render() {
    const { login, handleLogin, handlelogout } = this.props
    return (
      <div>
        <Link to="/">Home</Link>
        {login ? (
          <Fragment>
            <div onClick={handlelogout}>Logout</div>
            <Link to="/translation">Translation</Link>
          </Fragment>
        ) : (
          <div onClick={handleLogin}>Login</div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  login: state.getIn(['header', 'login'])
})

const mapDispatchToProps = dispatch => ({
  handleLogin() {
    dispatch(actionCreators.login())
  },
  handlelogout() {
    dispatch(actionCreators.logout())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
