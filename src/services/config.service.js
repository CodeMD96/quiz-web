angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'https://quizapimtd-env-1.eba-462pvi8m.us-west-2.elasticbeanstalk.com/';

    return service;
}]);