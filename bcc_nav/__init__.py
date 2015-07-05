from flask import Flask

app = Flask(__name__)

app.config.from_object('bcc_nav.default_settings')

# Import blueprints.
# from mod_data import mod_data
#
# # Register blueprints.
# app.register_blueprint(mod_data, url_prefix='/data')

# Import other application components.
from . import views
