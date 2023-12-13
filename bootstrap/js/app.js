var myApp = angular.module('myApp', [ 'ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider
    .when('/',{
        templateUrl: 'pages/main.html',
        controller: 'mainControler'
    })
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondControler'
    })
    .otherwise({
        redirectTo: 'pages/main.html',
        controller: 'mainControler'
    });
})

myApp.service('nameService', function () {
    var self = this;
    this.name = 'Mona & Edine';
    this.namelenght = function () {
      return self.name.length;
    }
});


myApp.controller('mainControler',[ '$location', '$log', '$routeParams', '$scope', 'nameService', function ( $location, $log, $routeParams, $scope, nameService) {
  $scope.person = {
      name: 'João',
      address: 'Baker Street 459',
      city: 'Nova york',
      state: 'NY',
      zip: '11111'
  }
   $scope.enderecoFormatado = function (person) {
       return person.address + ', ' + person.city + ', ' + person.state + ', ' + person.zip
   };
   
   }]);

   myApp.controller('secondControler',[ '$location', '$log', '$routeParams', '$scope', 'nameService',  function ( $location, $log, $routeParams, $scope, nameService) {
    $scope.num = $routeParams.num || 1;
    $scope.$watch('name', function () {
        nameService.name = $scope.name;
    });
    
   }]);
   myApp.directive("buscaResultados", function () {
    return {
        restrict: 'AECM',/*A->Apenas os Atributos, *E->Apenas os Elementos*/
        templateUrl: 'directives/buscaResultados.html',
        scope: {
            // personName:"@", /*texto não editavel*/
            // personAddress: "@",
            personObject: "=",
            enderecoFormatadoFuncao: "&"
        }
    }
});


   
 
  




 