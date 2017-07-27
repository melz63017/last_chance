var User_Portal = React.createClass({
  render(){
    return(
    <div>
      <SignUp showUser = {this.props.showUser}/>
      <LogIn />
    </div>
  )}
});
