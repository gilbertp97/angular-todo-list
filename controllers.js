toDoApp.controller('ToDoController', ['ToDoFactory', 'ToDoService', function(ToDoFactory, ToDoService){

  var self = this;

  self.todos = ToDoService.getAll();

  self.addToDo = function(todoText){
    self.todos.push(new ToDoFactory(todoText));
  };

  self.removeToDo = function(){
    self.todos.pop();
  };
}]);
