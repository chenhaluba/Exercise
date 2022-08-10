from flask import Blueprint, jsonify, request
from BLL.todos import TodosBLL

todos = Blueprint('todos', __name__)

todos_bll = TodosBLL()


# Get All
@todos.route("/", methods=['GET'])
def get_all_todos():
    todos = todos_bll.get_all_todos()
    return jsonify(todos)


# Get By ID
@todos.route("/<id>", methods=['GET'])
def get_todo(id):
    obj = todos_bll.get_todo(id)
    return jsonify(obj)


# Add a new todo
@todos.route("/", methods=['POST'])
def add_todo():
    obj = request.json
    result = todos_bll.add_todo(obj)
    return jsonify(result)


# Update a todo
@todos.route("/<id>", methods=['PUT'])
def update_todo(id):
    obj = request.json
    result = todos_bll.update_todo(id, obj)
    return jsonify(result)


# Delete a todo
@todos.route("/<id>", methods=['DELETE'])
def delete_todo(id):
    result = todos_bll.delete_todo(id)
    return jsonify(result)
