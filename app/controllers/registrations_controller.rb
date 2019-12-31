class RegistrationsController < Devise::RegistrationsController
  # skip_before_action :verify_authenticity_token, :only => :create

  protected

  def after_sign_up_path_for(resource)
    binding.pry

    if resource
      app_path
    else
      root_path
    end
  end
end
