var Main = React.createClass({
  getInitialState(){
    return {
      sign_up_success: false,
      user: {}
    }
  },
  showUser(user){
    var newUser = user;
    console.log(newUser);
    this.setState({sign_up_success: true, user: newUser});
  },
  render(){
    var toRender = this.state.sign_up_success? <User user = {this.state.user} sign_up_success = {this.state.sign_up_success}/> : <User_Portal showUser = {this.showUser}/>

    return (
      <div>
          {toRender}
      </div>
    )
  }
});
