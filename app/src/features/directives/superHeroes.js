angular.module('generatorAngularApp').directive('superHeroes', function($log) {
    return {
        restrict: 'E',
        templateUrl: 'src/features/directives/superHeroes.html',
        controller: /*@ngInject*/ function($scope) {
            $scope.names = [];
            $scope.names.push({
                name: 'Tony Stark'
            });
            $scope.names.push({
                name: 'Steve Rogers'
            });
            $scope.names.push({
                name: 'Bucky Barnes'
            });
            $scope.names.push({
                name: 'Natasha Romanoff'
            });
            $scope.names.push({
                name: 'Clint Barton'
            });
            $scope.names.push({
                name: 'Bruce Banner'
            });
            $scope.names.push({
                name: 'Vision'
            });
        }
    }
});