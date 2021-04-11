import React, { Component } from 'react';
import Auth from '../../services/Auth';
import '../../assets/scss/panel.scss';
import '../../assets/scss/form.scss';

type MyState = {
  username: string;
  password: string;
}

type MyProps = {};

class Login extends Component {
  public state: MyState = {
    username: '',
    password: '',
  }

  constructor(props: MyProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    Auth.login(this.state.username, this.state.password);
  }

  public handleChange(event: React.SyntheticEvent) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.setState({
      ...this.state,
      [target.name]: value,
    });
  }

  public render() {
    return (
      <div id="login-panel" className="panel">
        <h2>Login</h2>
        <form method="POST" onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Username:
          </label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
          <label htmlFor="">
            Password:
          </label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default Login;