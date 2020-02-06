from flask import Flask, render_template, request, Response, session
import json, datetime, atexit, time
#import matplotlib.pyplot as plt
app = Flask(__name__, template_folder='templates')
app.secret_key = '99qVu2YPjy5ss0Z66Igj'

# get mySQL into flask app
# from flask_sqlalchemy import SQLAlchemy
#Get stock data API

# Note: On the actual webserver, will need to CREATE USER with full privileges
# After creating the user, then create database
# SQLALCHEMY_DATABASE_URI = "mysql+mysqlconnector://{username}:{password}@{hostname}/{databasename}".format(
#     username="cs411proj",
#     password="Password_123",
#     hostname="cs411proj.mysql.pythonanywhere-services.com",
#     databasename="cs411proj$stock_data"
# )
# app.config["SQLALCHEMY_DATABASE_URI"] = SQLALCHEMY_DATABASE_URI
# app.config['SQLALCHEMY_DATABASE_URI'] = "mysql://cs411proj:Password_123@localhost/stock_data" # change to mySQL later
# app.config["SQLALCHEMY_POOL_RECYCLE"] = 299
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# db = SQLAlchemy(app)
# SimCon.db = db


# class User(db.Model):
#     id =

# Begin webscraping
# sss = Scrape()

@app.route('/')
@app.route('/index')
def home ():
    return render_template('/index.html')

@app.route('/get', methods=['GET'])
def get_firstname():
    firstname = request.args.get('firstname')
    lastname = request.args.get('lastname')
    major = request.args.get('major')
    lang = request.args.get('lang')
    session['user'] = user
    return Response(None)


# @app.route('/post', methods=['POST'])
# def insert_user_to_table():
    # username = request.form.get('username')
    # password = request.form.get('password')
    # connection = db.engine.connect()
    # user_exist = connection.execute("SELECT * FROM user WHERE user = \"" + username + "\";").first()
    # if(user_exist):
    #      connection.close()
    #      return json.dumps({'duplicate':True})
    # connection.execute("INSERT INTO user(user, password) " + "VALUES ( \"" + username +"\", \""+password+"\");" )
    # connection.close()
    # session['user'] = username
    # return json.dumps({'duplicate':False})



if __name__ == '__main__':
    app.run()
