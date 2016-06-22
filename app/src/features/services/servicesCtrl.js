angular
    .module('generatorAngularApp')
    .controller('ServicesCtrl', services);
services.$inject = ['$log', '$timeout', 'customService'];
function services($log, $timeout, customService) {
    var vm = this;
    vm.getLog = function(data) {
        $log.debug('$log is a built in service');
        if (data) {
            $log.debug(data);
        }
    };
    vm.getTimeout = function() {
        $timeout(function() {
            alert('$timeout is also a built in service');
        }, 2000);
    }
    vm.getPosts = function() {
        customService.posts().then(function(data) {
            vm.getLog(data);
            vm.posts = data.data;
        });
    };
    vm.clearPosts = function() {
        vm.posts = [];
    };
}