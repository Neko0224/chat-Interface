from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message')
    if not user_message:
        return jsonify({"response": "請輸入文字！"})

    # 簡單回應邏輯
    if "你好" in user_message:
        bot_response = "你好！有什麼可以幫助你的嗎？"
    else:
        bot_response = f"你剛剛說的是：{user_message}"

    return jsonify({"response": bot_response})

if __name__ == '__main__':
    app.run(debug=True)
