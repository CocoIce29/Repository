var myApp = angular.module('myApp', []);

myApp.controller("loginCtrl", function($scope, $http){

    $scope.reset = function() {
        $scope.userName = "";
        $scope.password = "";
    };

    $scope.login = function(userName, password) {
        var data = {
            username: userName,
            password: password
        };

        var dataPayload = JSON.stringify(data);
        
        $http.defaults.headers.post["Content-Type"] = "text/plain";

        $http.post('http://localhost:8080/', dataPayload).then(function(res) {
            res.end();
        }, function(res) {
            res.end();
        });
    }
});