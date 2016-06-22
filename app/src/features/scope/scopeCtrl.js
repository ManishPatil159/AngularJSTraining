angular
    .module('generatorAngularApp')
    .controller('ScopeCtrl', ['$scope', function($scope) {
        $scope.firstName = 'Steve';
        $scope.lastName = 'Rogers';
    }])
    .controller('ScopeChildCtrl', ['$scope', function($scope) {
        //$scope.firstName = 'Captain';
    }])