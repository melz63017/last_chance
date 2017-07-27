var SignUp_Form = React.createClass({
  getInitialState(){
    return(
      {
        name: "",
        email: "",
        netId: "",
        password: "",
        password_confirmation: ""
      }
    )
  },
  handleNameChange(e){
    return(
      this.setState({name: e.target.value})
    )
  },
  handleEmailChange(e){
    return(
      this.setState({email: e.target.value})
  )
  },
  handleNetIdChange(e){
    return(
      this.setState({netId: e.target.value})
    )
  },
  handlePasswordChange(e){
    return(
      this.setState({password: e.target.value})
    )
  },
  handlePasswordConfirmationChange(e){
    return(
      this.setState({password_confirmation: e.target.value})
    )
  },
  renderUserNameField(){
    return(
      <div>
        <label>Name: </label>
        <input
          name = "user[name]"
          type = "string"
          placeholder = "Enter Name"
          value = {this.state.name}
          onChange = {this.handleNameChange}
          />
      </div>
    )
  },
  renderUserEmailField(){
    return(
      <div>
        <label>Email: </label>
        <input
          name = "user[email]"
          type = "string"
          placeholder = "Enter Email"
          value = {this.state.email}
          onChange = {this.handleEmailChange}
          />
      </div>
    )
  },
  renderUserNetIdField(){
    return(
      <div>
        <label>Duke NetId: </label>
        <input
          name = "user[netId]"
          type = "string"
          placeholder = "Enter Duke Net Id"
          value = {this.state.netId}
          onChange = {this.handleNetIdChange}
          />
      </div>
    )
  },
renderUserPasswordField(){
  return(
    <div>
      <label>New Password: </label>
      <input
        name = "user[password]"
        type = "password"
        placeholder = "Enter Password"
        value = {this.state.password}
        onChange = {this.handlePasswordChange}
        />
    </div>
  )
  },
  renderUserPasswordConfirmationField(){
    return(
      <div>
        <label>Password Confirmation:  </label>

        <input
          name = "user[password_confirmation]"
          type = "password"
          placeholder = "Enter Password Again"
          value = {this.state.password_confirmation}
          onChange = {this.handlePasswordConfirmationChange}
          />
      </div>
    )
    },

    newUserSubmit(e){
      e.preventDefault();
      this.props.signUp({user: {name: this.state.name, netId: this.state.netId, password: this.state.password, password_confirmation: this.state.password_confirmation, email: this.state.email}});
    },
  render(){
    return(
      <form onSubmit = {this.newUserSubmit}>
        <div>
          <h1>Sign Up</h1>
          {this.renderUserNameField()}
          {this.renderUserEmailField()}
          {this.renderUserNetIdField()}
          {this.renderUserPasswordField()}
          {this.renderUserPasswordConfirmationField()}
          <input type="submit" value="Register" className='btn btn-primary' />

        </div>
      </form>
    )
  }
});
