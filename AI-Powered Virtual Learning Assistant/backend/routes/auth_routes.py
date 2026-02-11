from flask import Blueprint, request, jsonify
from flask_bcrypt import Bcrypt
import jwt
import datetime
from flask import current_app

auth_bp = Blueprint('auth_bp', __name__)
bcrypt = Bcrypt()

# Fake database (temporary)
users = {}


# ==========================
# REGISTER
# ==========================
@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    if email in users:
        return jsonify({"message": "User already exists"}), 400

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    users[email] = {
        "password": hashed_password
    }

    return jsonify({"message": "User registered successfully"}), 201


# ==========================
# LOGIN
# ==========================
@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    user = users.get(email)

    if not user:
        return jsonify({"message": "User not found"}), 404

    if not bcrypt.check_password_hash(user["password"], password):
        return jsonify({"message": "Entered password or email is not valid"}), 401

    token = jwt.encode({
        'email': email,
        'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=2)
    }, current_app.config['SECRET_KEY'], algorithm="HS256")

    return jsonify({
        "message": "Login successful",
        "token": token
    })


# ==========================
# FORGOT PASSWORD
# ==========================
@auth_bp.route('/forgot-password', methods=['POST'])
def forgot_password():
    data = request.json
    email = data.get('email')

    if email not in users:
        return jsonify({"message": "User not found"}), 404

    return jsonify({"message": "Password reset link sent (demo mode)"})
