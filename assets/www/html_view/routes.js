/**
 * Created by Administrator on 2016/10/28 0028.
 */
angular.module('routes', []).config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('bottom');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
        .state("info", {
            url: "/info/:messageId",
            templateUrl: "html_view/info_view/entryInfo.html",
            controller: 'infoController'
        })
        .state("all", {
            url: "/all",
            templateUrl: "html_view/tabs/all_shangping_list.html",
            controller: 'allController'
        })
        .state("all.new_commodity", {
            url: "/new_commodity",
            views: {
                "new_commodity": {
                    templateUrl: "html_view/tabs/new_commodity.html",
                    // parent: 'all'
                    // controller: 'CommodityController'
                }
            }
        })
        .state("all.sales", {
            url: "/sales",
            views: {
                "scale_list": {
                    templateUrl: "html_view/tabs/scale_list.html",
                    // parent: 'all'
                    // controller: 'SalesController'
                }
            }
        })
        .state("all.price", {
            url: "/price",
            views: {
                "price_list": {
                    templateUrl: "html_view/tabs/price_list.html",
                    // parent: 'all',
                    controller: 'PriceController'
                }
            }
        })
        .state("main", {
            url: "/main",
            abstract: true,
            templateUrl: "html_view/main_tab/main_tab.html",
        })

        .state("main.main", {
            url: "/main",
            views: {
                "main_view": {
                    templateUrl: "html_view/main_tab/main_view.html",
                    controller: 'myCtrl'
                }
            }
        })
        .state("main.shoppingCart", {
            url: "/cart",
            views: {
                "shopping_cart": {
                    templateUrl: "html_view/main_tab/shopping_cart.html",
                    controller: 'carList'
                }
            }
        })
        .state("main.shops", {
            url: "/shops",
            views: {
                "shops_view": {
                    templateUrl: "html_view/main_tab/shops_view.html",
                    controller: 'shopList'
                }
            }
        }).state("main.my", {
        url: "/my",
        views: {
            "my_view": {
                templateUrl: "html_view/main_tab/my_view.html",
                // controller: 'PriceController'
            }
        }
    });
    $urlRouterProvider.otherwise('/main/main');
});
