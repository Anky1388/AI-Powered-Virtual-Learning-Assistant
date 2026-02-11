from flask_cors import CORS
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    message = data.get("message", "")
    language = data.get("language", "en")

    reply = (
        "This is an English AI response"
        if language == "en"
        else "यह एक हिंदी AI प्रतिक्रिया है"
    )

    return jsonify({
        "reply": reply,
        "confidence": 0.95
    })

if __name__ == "__main__":
    print("🚀 Flask server starting...")
    app.run(debug=True)
