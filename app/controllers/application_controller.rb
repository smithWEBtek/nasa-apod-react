class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  protect_from_forgery
  # this link:  https://stackoverflow.com/questions/20875591/actioncontrollerinvalidauthenticitytoken-in-registrationscontrollercreate
  # clears session if no current user ( I think )


end
