angular.module("dateService", [])
    .factory("data", function () {
        var shangping = [{id: 0, name: "大中华保健瓶", scale: 15, icon_url: "img/test1.jpg"}, {
            id: 2,
            name: "大中华保健瓶",
            scale: 15,
            icon_url: "img/test2.jpg"
        }, {id: 2, name: "大中华保健瓶", scale: 15, icon_url: "img/test3.jpg"}];
        var adress = ["http://img3.3lian.com/2013/v9/58/d/21.jpg", "http://img.iyookee.cn/20150619/20150619_100607_883_670.png", "http://img.iyookee.cn/20150714/20150714_172952_955_22.jpg"];
        var shangPingInfos = [{id: 10, name: "大中华保健瓶", scale: 15, icon_url: "img/test1.jpg"}, {
            id: 11,
            name: "大中华保健瓶",
            scale: 15,
            icon_url: "img/test2.jpg"
        }, {id: 12, name: "大中华保健瓶", scale: 15, icon_url: "img/test3.jpg"}, {
            id: 13,
            name: "大中华保健瓶",
            scale: 15,
            icon_url: "img/test1.jpg"
        }, {id: 14, name: "大中华保健瓶", scale: 15, icon_url: "img/test2.jpg"}, {
            id:15,
            name: "大中华保健瓶",
            scale: 15,
            icon_url: "img/test3.jpg"
        }, {id: 16, name: "大中华保健瓶", scale: 15, icon_url: "img/test1.jpg"}, {
            id: 17,
            name: "大中华保健瓶",
            scale: 15,
            icon_url: "img/test2.jpg"
        }, {id: 18, name: "大中华保健瓶", scale: 15, icon_url: "img/test3.jpg"}, {
            id: 19,
            name: "大中华保健瓶",
            scale: 15,
            icon_url: "img/test1.jpg"
        }, {id: 20, name: "大中华保健瓶", scale: 15, icon_url: "img/test2.jpg"}, {
            id: 21,
            name: "大中华保健瓶",
            scale: 15,
            icon_url: "img/test3.jpg"
        }];
        var shopList=[{id: 500, name: "大中华保健瓶", scale: 15,des:"我店产品全部来自正规的渠道，以最直接有效的方式送达最终端消费者手里，避免了中间过多的流通环节。", icon_url: "img/test1.jpg"}, {
            id: 501,
            name: "大中华保健瓶",
            scale: 15,
            des:"我店产品全部来自正规的渠道，以最直接有效的方式送达最终端消费者手里，避免了中间过多的流通环节。",
            icon_url: "img/test2.jpg"
        }, {id: 502, name: "大中华保健瓶", scale: 15,des:"我店产品全部来自正规的渠道，以最直接有效的方式送达最终端消费者手里，避免了中间过多的流通环节。", icon_url: "img/test3.jpg"}, {
            id: 503,
            name: "大中华保健瓶",
            scale: 15,des:"我店产品全部来自正规的渠道，以最直接有效的方式送达最终端消费者手里，避免了中间过多的流通环节。",
            icon_url: "img/test1.jpg"
        }, {id: 504, name: "大中华保健瓶", scale: 15,des:"我店产品全部来自正规的渠道，以最直接有效的方式送达最终端消费者手里，避免了中间过多的流通环节。", icon_url: "img/test2.jpg"}, {
            id:505,
            name: "大中华保健瓶",
            scale: 15,des:"我店产品全部来自正规的渠道，以最直接有效的方式送达最终端消费者手里，避免了中间过多的流通环节。",
            icon_url: "img/test3.jpg"
        }, {id: 506, name: "大中华保健瓶", scale: 15, des:"我店产品全部来自正规的渠道，以最直接有效的方式送达最终端消费者手里，避免了中间过多的流通环节。",icon_url: "img/test1.jpg"}, {
            id: 507,
            name: "大中华保健瓶",
            scale: 15,des:"我店产品全部来自正规的渠道，以最直接有效的方式送达最终端消费者手里，避免了中间过多的流通环节。",
            icon_url: "img/test2.jpg"
        }, {id: 508, name: "大中华保健瓶", scale: 15, des:"我店产品全部来自正规的渠道，以最直接有效的方式送达最终端消费者手里，避免了中间过多的流通环节。",icon_url: "img/test3.jpg"}, {
            id: 509,
            name: "大中华保健瓶",
            scale: 15,des:"我店产品全部来自正规的渠道，以最直接有效的方式送达最终端消费者手里，避免了中间过多的流通环节。",
            icon_url: "img/test1.jpg"
        }, {id: 600, name: "大中华保健瓶", scale: 15, des:"我店产品全部来自正规的渠道，以最直接有效的方式送达最终端消费者手里，避免了中间过多的流通环节。",icon_url: "img/test2.jpg"}, {
            id: 601,
            name: "大中华保健瓶",
            scale: 15,des:"我店产品全部来自正规的渠道，以最直接有效的方式送达最终端消费者手里，避免了中间过多的流通环节。",
            icon_url: "img/test3.jpg"
        }];
        var shopCarList=[{id:1000,name:"余华菜籽油",sales:4567824,price:28,isChecked:false},
            {id:1001,name:"余华菜籽油",sales:4567824,price:28,isChecked:false},
            {id:1002,name:"余华菜籽油",sales:4567824,price:28,isChecked:false},
            {id:1003,name:"余华菜籽油",sales:4567824,price:28,isChecked:false},
            {id:1004,name:"余华菜籽油",sales:4567824,price:28,isChecked:false},
            {id:1005,name:"余华菜籽油",sales:4567824,price:28,isChecked:false},
            {id:1006,name:"余华菜籽油",sales:4567824,price:28,isChecked:false}];
        return {
            getShangping: function () {
                return shangping;
            }, getAddress: function () {
                return adress;
            },getShangInfos:function(){
                return shangPingInfos;
            },getShopList:function () {
                return shopList;
            },getShopCarList:function () {
                return shopCarList;
            }
        };


    });