(function () {
    "use strict";
    var module = angular.module("app");


    module.component("appContact",
    {
        templateUrl: "/ps-movies/product-app.component.html",
        $routeConfig: [
            { path: "/about", component: "productList", name: "About" },
            { path: "/contact", component: "appContact", name: " Contact" },
            {path:"/details/:id/...",component:"productDetails", name:"Details"},
            {path:"/**",redirectTo:["List"]}
        ]

    });
}()); 