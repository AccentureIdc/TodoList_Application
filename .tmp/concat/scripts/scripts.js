'use strict';

/**
 * @ngdoc overview
 * @name todolistApp
 * @description
 * # todolistApp
 *
 * Main module of the application.
 */
angular
  .module('todolistApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'
  ])
.config(['localStorageServiceProvider', function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('ls');
}])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

'use strict';

/**
 * @ngdoc function
 * @name todolistApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todolistApp
 */
angular.module('todolistApp')
  .controller('MainCtrl', ["$scope", "localStorageService", function ($scope, localStorageService) {
    var todosInStore = localStorageService.get('todos');

$scope.todos = todosInStore || [];

$scope.$watch('todos', function () {
  localStorageService.set('todos', $scope.todos);
}, true);
    
    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
    
    $scope.removeTodo = function (index) {
        $scope.todos.splice(index, 1);
    };
    
  }]);

'use strict';

/**
 * @ngdoc function
 * @name todolistApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the todolistApp
 */
angular.module('todolistApp')
  .controller('AboutCtrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
