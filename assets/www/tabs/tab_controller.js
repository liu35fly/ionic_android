/**
 * Created by Administrator on 2016/10/21 0021.
 */
angular.module('myList', ['ionic'])
    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider
            .state("tabs", {
            url: "/tab",
            abstract: true,
            templateUrl: "tabs/shangping_list_tab.html",
        })

            .state("tabs.new_commodity", {
                url: "/new_commodity",
                views: {
                    "new_commodity": {
                        templateUrl: "tabs/new_commodity.html",
                        // controller: 'CommodityController'
                    }
                }
            })
            .state("tabs.sales", {
                url: "/sales",
                views: {
                    "scale_list": {
                        templateUrl: "tabs/scale_list.html",
                        // controller: 'SalesController'
                    }
                }
            })
            .state("tabs.price", {
                url: "/price",
                views: {
                    "price_list": {
                        templateUrl: "tabs/price_list.html",
                       controller: 'PriceController'
                    }
                }
            });
    $urlRouterProvider.otherwise('/tab/new_commodity');
    }
);
