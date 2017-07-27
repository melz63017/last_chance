class UsersController < BaseController
  def show
    @user = User.find(params["id"])
    #respond_with user, json: user
  end
  def index
    respond_with User.all
  end

  def create
    respond_with User.create(user_params)
  end

  def destroy
    respond_with User.destroy(params[:id])
  end
  def update
    user = User.find(params["id"])
    user.update_attributes(user_params)
    respond_with user, json: user
  end
  private
  def user_params
    params.require(:user).permit(:netId, :name, :email, :password, :password_confirmation)
  end
end
