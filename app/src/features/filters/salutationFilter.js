angular
    .module('generatorAngularApp')
    .filter('salutation', function() {
        return function(name) {
            if (name) {
                return 'Mr/Ms ' + name;
            }
            return name;
        };
    })