from DAL.todos_db import TodosDB


class TodosBLL:
    def __init__(self):
        self.__todos_db = TodosDB()

    def get_all_todos(self):
        todos_db = self.__todos_db.get_all_todos()
        return todos_db

    def get_todo(self, obj):
        todos_db = self.__todos_db.get_todo(obj)
        return todos_db

    def add_todo(self, obj):
        self.__todos_db.add_todo(obj)
        return 'Created!'

    def update_todo(self, id, obj):
        self.__todos_db.update_todo(id, obj)
        return 'Updated!'

    def delete_todo(self, obj):
        self.__todos_db.delete_todo(obj)
        return 'Deleted!'
