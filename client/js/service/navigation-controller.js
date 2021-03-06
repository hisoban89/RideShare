app.controller('navigationController', ['$scope', '$http', '$resource', '$location',
 function ($scope, $http, $resource, $location) {

    if (localStorage['User-Data']){
        $scope.loggedIn = true;
    } else {
        $scope.loggedIn = false;
    }
          
    $scope.logUserIn = function(){
        $http.post('api/user/login', $scope.login).success(function(response){
            localStorage.setItem('User-Data', JSON.stringify(response));
            $scope.loggedIn = true;
            
            window.location.href = '/map';
            console.log(User-Data);
        }).error(function(error){
            console.error(error);

        });
    };
    
    $scope.logOut = function () {
        localStorage.clear();
        $scope.loggedIn = false;
        window.location.href = '/login';
    }

}]);