from flask import jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from models.user_model import users_collection


# ------------------ REGISTER ------------------
def register_user(data):
    email = data.get("email")
    password = data.get("password")

    if users_collection.find_one({"email": email}):
        return jsonify({
            "success": False,
            "message": "User already exists"
        }), 400

    hashed_password = generate_password_hash(password)

    users_collection.insert_one({
        "email": email,
        "password": hashed_password
    })

    return jsonify({
        "success": True,
        "message": "User registered successfully"
    }), 201


# ------------------ LOGIN ------------------
def login_user(data):
    email = data.get("email")
    password = data.get("password")

    user = users_collection.find_one({"email": email})

    if not user:
        return jsonify({
            "success": False,
            "message": "User not found"
        }), 404

    if not check_password_hash(user["password"], password):
        return jsonify({
            "success": False,
            "message": "Invalid email or password"
        }), 401

    return jsonify({
        "success": True,
        "message": "Login successful",
        "user": {
            "email": user["email"]
        }
    }), 200
