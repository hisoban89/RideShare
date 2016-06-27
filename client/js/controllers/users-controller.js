app.controller('usersController', ['$scope', '$resource', function ($scope, $resource) {

// usersController inject $scope - $scope is used to connect  view & controller

  var User = $resource('/api/users');

  User.query(function (results) {
    $scope.users = results;
  });

  $scope.users = []

  $scope.createUser = function () {
    var user       = new User();
    user.fname = $scope.fname;
    user.lname  = $scope.lname;
    user.uname  = $scope.uname;
    user.password  = $scope.password;
    user.$save(function (result) {
      $scope.users.push(result);
      $scope.fname = '';
      $scope.lname = '';
      $scope.uname = '';
      $scope.password = '';
    });
  }

  
}]);