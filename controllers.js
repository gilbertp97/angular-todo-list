toDoApp.controller('ToDoController', function(){

  var self = this

  self.todos = [{ text: "ToDo1", completed: true }, { text: "Todo2", completed: false }];

  self.addToDo = function(todoText){
    self.todos.push({ text: todoText, completed: false })
  };

  self.removeToDo = function(){
    self.todos.pop();
  };
});
