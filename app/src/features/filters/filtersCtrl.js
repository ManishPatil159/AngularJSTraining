angular
    .module('generatorAngularApp')
    .controller('FiltersCtrl', ['$scope', function($scope) {
        var vm = this;
        vm.names = [];
        vm.names.push({
            name: 'Tony Stark'
        });
        vm.names.push({
            name: 'Steve Rogers'
        });
        vm.names.push({
            name: 'Bucky Barnes'
        });
        vm.names.push({
            name: 'Natasha Romanoff'
        });
        vm.names.push({
            name: 'Clint Barton'
        });
        vm.names.push({
            name: 'Bruce Banner'
        });
        vm.names.push({
            name: 'Vision'
        });
    }]);