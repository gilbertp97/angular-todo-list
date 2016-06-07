toDoApp.service('ToDoService', ['$http', 'ToDoFactory', function($http, ToDoFactory) {
  this.getAll = function() {
    // use $http's built-in .get() method
    // that uses promises to stay synchronous
    var todos = [];
    $http.get('http://quiet-beach-24792.herokuapp.com/todos.json')
      .then(function(response) {
        // good response
        response.data.forEach(function(data) {
          todos.push(new ToDoFactory(data.text, data.completed));
        });
      }, function(err) {});
    return todos;
  };
}]);
