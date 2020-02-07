# Associate PowerPoint
# https://docs.google.com/presentation/d/1B0CyviSLx3unX3fd5nlH632PNFnaNdz7jxTLSwl336s/edit?usp=sharing

from flask import Flask, render_template, request, Response
import json
import mockdb as db

app = Flask(__name__, template_folder='templates')

# Operations you have:
# getAll()
# getOne(firstname, lastname)
# getMajor(major)
# getLang(lang)
# add(firstname, lastname, major, lang)
# updateMajor(firstname, lastname, major)


@app.route('/')
@app.route('/index')
def home ():
    return render_template('/home.html')

@app.route('/getall', methods=['GET'])
def get_all():
    curr_all = db.getAll()
    return json.dumps(curr_all)

@app.route('/getone', methods=['GET'])
def get_one():
    firstname = request.args.get('firstname')
    lastname = request.args.get('lastname')
    return Response(None)

# @app.route('/getmajor', methods=['GET'])
# def get_major():

# @app.route('/getlang', methods=['GET'])
# def get_lang():

@app.route('/post', methods=['POST'])
def add():
    firstname = request.form.get('firstname')
    lastname = request.form.get('lastname')
    major = request.form.get('major')
    lang = request.form.get('lang')
    return Response(None)
    
# @app.route('/updatemajor', methods=['PUT'])
# def updatemajor():

# We'll do this together
# @app.route('/updatelang', methods=['PUT'])
# def updatelang():

# Do this on your own!
# @app.route('/del', methods=['DELETE'])
# def del():



if __name__ == '__main__':
    app.run()
