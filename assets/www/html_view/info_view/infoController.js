/**
 * Created by Administrator on 2016/10/26 0026.
 */
angular.module('entryInfo', ["dateService"])
    .controller('infoController', ['$scope', '$state', '$ionicSlideBoxDelegate','data', '$stateParams',  '$http',function ($scope, $stateParams, $ionicSlideBoxDelegate, data,$state,  $http ) {
        $scope.$on("$ionicView.beforeEnter", function () {
            var message = 0;
            message = $stateParams.params.messageId;
            alert(message);
        });
        $scope.pic = function () {
            $ionicSlideBoxDelegate.slide(0);
        };
        $scope.pinglun = function () {
            $ionicSlideBoxDelegate.slide(1);
        };
        // $scope.pay = function () {
        // $http.jsonp( 'http://www.ifeng.com/').success(function (response) {
        //         console.log("succeed " + response);
        //     }).error(function (response) {
        //         console.log("error " + response);
        //     });
        //
        //     $http({method: 'GET', url: 'http://www.ifeng.com/'}).
        //     then(function(response) {
        //         console.log("succeed " + response);
        //     }, function(response) {
        //         console.log("error " + response);
        //     });
        // }
        // $http.get("http://www.runoob.com/try/angularjs/data/sites.php")
        //     .success(function (response) {console.log("succeed " + response);});

        $scope.shangPing=data.getShangInfos();

    }]);