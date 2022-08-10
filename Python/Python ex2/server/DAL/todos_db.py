from pymongo import MongoClient
from bson import ObjectId


class TodosDB:
    def __init__(self):
        self.__client = MongoClient("localhost", 27017)
        self.__db = self.__client["todosDB"]
        self.__collection = self.__db["todos"]

    def get_all_todos(self):
        todos = list(self.__collection.find({}))
        return todos

    def get_todo(self, id):
        todo = self.__collection.find_one({"_id": ObjectId(id)})
        return todo

    def add_todo(self, obj):
        self.__collection.insert_one(obj)
        return 'Created!'

    def update_todo(self, id, obj):
        self.__collection.update_one({"_id": ObjectId(id)}, {"$set": obj})
        return 'Updated!'

    def delete_todo(self, id):
        self.__collection.delete_one({"_id": ObjectId(id)})
        return 'Deleted!'
