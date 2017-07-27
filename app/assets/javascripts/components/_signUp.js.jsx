var SignUp = React.createClass({
  signUp(formData){
    $.ajax({
      url: '/users',
      type: 'POST',
      data: formData,
      success: (data) => {
        this.props.showUser(data);
      }
    });
  },
  render(){
    return (
      <div>
      <SignUp_Form signUp = {this.signUp} />
      </div>
    )
  }

});
