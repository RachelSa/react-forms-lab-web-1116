const React = require('react');

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    //function provided by props
    this.onSubmit = this.props.onSubmit
    //set username and password states to blank
    this.state = {
      username: "",
      password:""
    };
  }

  //if data is entered in username field, update state
  changeUsername(event){
    this.setState({username: event.target.value})
  }

  changePassword(event){
    this.setState({password: event.target.value})
  }

  //upon submit, make sure user and pass fields filled in before calling submit funct 
  validForm(event){
    //debugger
    event.preventDefault()
    let username = this.state.username
    let password = this.state.password
    if (username !== "" && password !== ""){
      this.onSubmit({username, password}) }

    }

  render() {
    return (
      <form onSubmit={this.validForm.bind(this)}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.changeUsername.bind(this)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.changePassword.bind(this)}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

module.exports = LoginForm;
