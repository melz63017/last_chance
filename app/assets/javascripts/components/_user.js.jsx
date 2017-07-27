var User = React.createClass( {
  render(){
    //if (this.props.sign_up_success) {flash[:success] = "Welcome to the Sample App!"}; TO DO: flash success message
    return(
      <div>
        <h3>{this.props.user.name}</h3>
        <p>Net Id:  {this.props.user.netId}</p>
        <p>Email: {this.props.user.email}</p>
      </div>
    )
  }
});
