class RegistrationsController < ApplicationController
  # Devise::RegistrationsController 
  #  skip_before_action :verify_authenticity_token, :only => :create, raise: false

  protected 

  def after_sign_up_path_for(resource)
    app_path 
  end
end
