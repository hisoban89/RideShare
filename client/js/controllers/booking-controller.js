app.controller('bookingController', ['$scope', '$resource', function ($scope, $resource) {


  var Booking   = $resource('/api/bookings');
  
  // Get all booking

  Booking.query(function (result) {
    $scope.bookings = result;

    //console.log(result1);
  });

  $scope.bookings = [];

  $scope.createBooking = function () {
    var booking       = new Booking();
    booking.booking   = 'booked';
   
    booking.$save(function (result) {
      $scope.bookings.push(result);
    });
    window.location.href = '/login';
    alert('Successfully Booked.');
  }

  
}]);