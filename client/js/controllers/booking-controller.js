app.controller('bookingController', ['$scope', '$resource', function ($scope, $resource) {


  var Booking   = $resource('/api/booking');
  
  // Get all booking

  Booking.query(function (result) {
    $scope.booking = result;

    //console.log(result1);
  });

  $scope.booking = [];

  $scope.createBooking = function () {
    var booking       = new Booking();
    booking.booking   = $scope.booking;

    
    
    booking.$save(function (result) {
      $scope.booking.push(result);
    });
    window.location.href = '/login';
    alert('Successfully Booked.');
  }

  
}]);