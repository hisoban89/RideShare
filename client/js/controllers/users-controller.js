app.controller('usersController', ['$scope', '$resource', function ($scope, $resource) {

// usersController inject $scope - $scope is used to connect  view & controller



  var User   = $resource('/api/users');
  // var Userid = $resource('/api/users/get');

  
  // Get all user

  User.query(function (result1) {
    $scope.users = result1;

    //console.log(result1);
  });

  $scope.users = [];


  // Get one user 

  // Userid.query(function (result1) {
  //     $scope.userss = result1;
  // });
  // // console.log(result1);
  // // console.log('sss');
  // $scope.userss = [];
  // //

  $scope.createUser = function () {
    var user       = new User();
    user.fname     = $scope.fname;
    user.lname     = $scope.lname;
    user.uname     = $scope.uname;
    user.password  = $scope.password;
    user.$save(function (result) {
      $scope.users.push(result);
      $scope.fname = '';
      $scope.lname = '';
      $scope.uname = '';
      $scope.password = '';
    });
    window.location.href = '/login';
    alert('Successfully Registered.');
  }

  
}]);