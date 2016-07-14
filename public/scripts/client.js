var app = angular.module('routeApp', ['ngRoute']);

angular.module('routeApp').config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/archer', {
    templateUrl:'views/archery.html',
    controller:'ArcheryController'

  });


  $locationProvider.html5Mode(true);
});

angular.module('routeApp').controller('ArcheryController', function($scope, $http){
  $http.get('/archer').then(function(response){
    console.log(response);
    $scope.archer = ('Archer is ' + response.data);
  });
});

angular.module('routeApp').controller('CanoekayakController', function($scope, $http){
  $http.get('/boadie').then(function(response){
    console.log(response);
    $scope.archer = ('Boadie is ' + response.data);
  });
});

angular.module('routeApp').controller('ModpentController', function($scope, $http){
  $http.get('/pentathalist').then(function(response){
    console.log(response);
    $scope.archer = ('Pentathalist is ' + response.data);
  });
});

angular.module('routeApp').controller('SyncswimController', function($scope, $http){
  $http.get('/synchist').then(function(response){
    console.log(response);
    $scope.archer = ('Syncist is ' + response.data);
  });
});

angular.module('routeApp').controller('TaekwondoController', function($scope, $http){
  $http.get('/taekwandist').then(function(response){
    console.log(response);
    $scope.archer = ('Taekwandist is ' + response.data);
  });
});
