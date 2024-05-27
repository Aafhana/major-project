from flask import Flask, request, jsonify
from flask_lambda import FlaskLambda
import chat  # Assuming chat.py contains your chatbot logic

app = FlaskLambda(__name__)

@app.route('/api/chat', methods=['POST'])
def chat_endpoint():
    data = request.get_json()
    user_input = data.get('message')
    response = chat.get_response(user_input)  # Assuming get_response is a function in chat.py
    return jsonify(response)

if __name__ == "__main__":
    app.run()
