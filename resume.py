from flask import Flask, render_template
import json

with open('config.json', 'r') as f:
    params = json.load(f)['parameter']

app = Flask(__name__)
@app.route('/')
def resume():
    return render_template('resume.html', param = params)
if __name__ == '__main__':
    app.run(debug=True)