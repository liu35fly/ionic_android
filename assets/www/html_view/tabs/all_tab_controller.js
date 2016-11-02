/**
 * Created by Administrator on 2016/11/1 0001.
 */
angular.module('allTabController',[])
.controller('allController',['$scope','$state',function ($scope,$state) {
    $scope.gotoMain=function () {
        $state.go('main.main');
    }
}])