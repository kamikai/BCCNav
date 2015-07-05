#!/usr/bin/env python

from flask.ext.script import Manager

from bcc_nav import app

manager = Manager(app)


@manager.command
def debug():
    app.run(debug=True)


@manager.command
def runserver():
    from cherrypy import wsgiserver
    d = wsgiserver.WSGIPathInfoDispatcher({'/': app})
    server = wsgiserver.CherryPyWSGIServer(('0.0.0.0', 80), d)

    try:
        server.start()
    except KeyboardInterrupt:
        server.stop()


if __name__ == "__main__":
    manager.run()
