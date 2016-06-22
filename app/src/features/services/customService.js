angular
    .module('generatorAngularApp')
    .factory('customService', services);
services.$inject = ['$http', 'apiEndpoint'];
function services($http, apiEndpoint) {
    var sampleFactory = {};

    var posts = function() {
        return $http.get(apiEndpoint + 'posts')
            .then(function(results) {
                return results;
            });
    }

    sampleFactory.posts = posts;
    return sampleFactory;
}