var myApp = angular.module('myApp', []);

myApp.controller("loginCtrl", function($scope, $http){

    $scope.reset = function() {
        $scope.userName = "";
        $scope.password = "";
    };

    $scope.postData = function(userName, password) {
        var data = {
            username: userName,
            password: password
        };

        $http.post('http://localhost:8080/', data).then(function() {
            $scope.msg = "Data posted!"
            $scope.data = data;
        }, function() {
            $scope.msg = "Data not posted.";
            $scope.data = data;
        });
    }
});


