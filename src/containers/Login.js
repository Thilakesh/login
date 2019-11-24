import React, {Component} from 'react'
import './Login.sass'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state= {
      username: '',
      password: ''
    }
  }
    handleUsernamechange = (event) => {
     this.setState({
       username: event.target.value
     })
    }
    handlePasswordchange = (event) => {
      this.setState({
        password: event.target.value
      })
    }
    handlesubmit = (event) => {
      alert(`${this.state.username} ${this.state.password} `)
      event.preventDefault()
    }

    render() {
      return (
        <form onSubmit={this.handlesubmit}>
        <div className="login">
          
          <div className="input-container">
            <input type="text" value={this.state.username} onChange={this.handleUsernamechange} placeholder="Username"/>
            <i class="zmdi zmdi-account zmdi-hc-lg"></i>
          </div>
          
          <div className="input-container">
            <input type="password" value={this.state.password} onChange={this.handlePasswordchange} placeholder="Password"/>
            <i class="zmdi zmdi-lock zmdi-hc-lg"></i>
          </div>
          
          <button type="submit">Log In</button>
        </div>
        </form>
      )
    }
  }

  export default Login
