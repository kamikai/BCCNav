#!/usr/bin/env python

from flask.ext.script import Manager

from bcc_nav import app

manager = Manager(app)


@manager.command
def debug():
    app.run(debug=True)


@manager.command
def runserver():
    app.run('0.0.0.0', 80)


if __name__ == "__main__":
    manager.run()
