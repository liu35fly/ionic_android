/**
 * Created by Administrator on 2016/10/24 0024.
 */
angular.module("MainController", ["dateService"])
    .controller('myCtrl', ['$scope', '$ionicSlideBoxDelegate', 'data', '$state', '$rootScope', '$location', function ($scope, $ionicSlideBoxDelegate, data, $state, $rootScope, $location) {
        $scope.ad = data.getAddress();
        console.log($scope.ad);

        //为了验证属性active-slide定义的模型，angularjs是mvc模式
        $scope.model = {
            activeIndex: 0
        };
        //滑动图片的点击事件
        $scope.coverFlowClick = function () {
            var index = $ionicSlideBoxDelegate.currentIndex();
            alert(index);
        }

        //此事件对应的是pager-click属性，当显示图片是有对应数量的小圆点，这是小圆点的点击事件
        $scope.pageClick = function (index) {
            alert(index);

            $scope.model.activeIndex = index;
        };

        //当图片切换后，触发此事件，注意参数
        $scope.slideHasChanged = function ($index) {
            //alert($index);

        };
        //这是属性delegate-handle的验证使用的，其实没必要重定义，直接使用$ionicSlideBoxDelegate就可以
        $scope.delegateHandle = $ionicSlideBoxDelegate;

        $scope.shangPing = data.getShangping();
        console.log($scope.shangPing);

        $scope.jingpingClik = function (id) {
            alert("点击了 第" + id + "项");
            $state.go("info", {'messageId': id});
        }
        $scope.guanggaoClik = function () {
            // alert("点击了 图片广告");
            $state.go("info", {'messageId': 15});

        }


        $scope.allShangping = data.getShangInfos();
        $scope.shangPingClik = function (shangping) {
            alert("这是" + shangping.name + ",价格是￥：" + shangping.scale + ",它是第" + shangping.id + "号产品");
            $state.go("info", {'messageId': shangping.id});
        };
    }]);

angular.module("ShopsController", ["dateService"])
    .controller("shopList", ['$scope', 'data','$state', function ($scope, data,$state) {
        $scope.items = data.getShopList();

        $scope.choice_1 = function () {
                console.log($scope.select_1);
        }
        $scope.choice_2 = function () {
            console.log($scope.select_2);
        }

        $scope.doRefresh = function () {
            //......
            //停止广播
            $scope.$broadcast('scroll.refreshComplete');
        };
        $scope.loadMore = function () {
            //...
            //停止广播
            $scope.$broadcast('scroll.infiniteScrollComplete');
        }

        $scope.shangPingClik=function (id) {
            $state.go("info", {'messageId': id});
        }
    }]);
angular.module('ShopCarController', ["dateService"]).controller('carList', ['$scope', 'data', function ($scope, data) {
    $scope.items = data.getShopCarList();
    var checkCar = [];
    $scope.checkChange = function (item) {
        var mum = -1;
        num = checkCar.indexOf(item);
        if (item.isChecked) {
            if (num == -1) {
                checkCar.push(item);
            } else {
                return;
            }

        } else {
            if (num == -1) {
                return;
            } else {
                checkCar.splice(num, 1);
            }
        }

    }
    var totalPrice = 0;
    var isTotal = false;
    $scope.totalPrice = function () {
        if (isTotal) {
            return totalPrice;
        }
        var total = 0;
        for (var i = 0; i < checkCar.length; i++) {
            total = total + checkCar[i].price;
        }
        totalPrice = total;
        return total;
    }
    $scope.payTotal = function () {
        alert("去结账了！一共" + totalPrice);
    }

    $scope.selectTotal = function (action,shopCarPay) {
        var total = 0;
        if (shopCarPay) {
            isTotal = true;
            for (var i = 0; i < $scope.items.length; i++) {
                total = total + $scope.items[i].price;
                $scope.items[i].isChecked = true;
            }
            totalPrice = total;
            console.log(totalPrice);
            console.log("isTotal is " + isTotal);
        } else {
            isTotal = false;
            for (var i = 0; i < $scope.items.length; i++) {
                total = total + $scope.items[i].price;
                $scope.items[i].isChecked = false;
            }
            total = 0;
             checkCar=[];
            console.log("isTotal is " + isTotal);
        }
        return total;
    }
}
])
