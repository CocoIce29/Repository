var myApp = angular.module('myApp', []);

myApp.controller("registrationCtrl", function($scope, $http){

    $scope.reset = function() {
        $scope.userName = "";
        $scope.password = "";
        $scope.firstName = "";
        $scope.lastName = "";
        $scope.birthDate = "";
        $scope.email = "";
        $scope.phone = "";
    };

    $scope.userRegistration = function(userName, password, firstName, lastName, birthDate, email, phone) {
        var data = {
            userName: userName,
            password: password,
            firstName: firstName,
            lastName: lastName,
            birthDate: birthDate,
            email: email,
            phoneNumber: phone
        };

        var dataPayload = JSON.stringify(data);
        
        $http.defaults.headers.post["Content-Type"] = "text/plain";

        $http.post('http://localhost:3000/', dataPayload).then(function(res) {
            res.end();
        }, function(res) {
            res.end();
        });
    }
});