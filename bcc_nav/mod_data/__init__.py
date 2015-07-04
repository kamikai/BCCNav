from flask import Blueprint, abort, jsonify

mod_data = Blueprint('mod_data', __name__)


@mod_data.route('/<resource>')
def serve_data(resource):
    """ Serve data about a particular resource.
    """
    # Check for error, abort if bad.
    resources = {'bikes', 'bus_stops', 'ferries', 'libraries', 'wifi'}
    if resource not in resources:
        return abort(404)

    return jsonify({'query': resource})


