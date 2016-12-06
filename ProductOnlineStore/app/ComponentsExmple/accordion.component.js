(function () {
    "use strict";
    var module = angular.module("app");
    module.component("accodion",
    {    transclude:true,
    template: "<div class= 'panel-group' ng-transclude ></div>",
        controllerAs:"vm",
        controller:function() {
            var vm = this;
            var panels = [];
            vm.addPanel = function (panel) {
                panels.push(panel);
                if (panels.length > 0) {
                    panels[0].turnOn();
                }
            }
            vm.selectPanel= function(panel) {
                for(var i=0;i<panels.length;i++) {
                    if (panel === panels[i]) {
                        panels[i].turnOn();
                    } else {
                        panels[i].turnOff();
                    }
                }
            }
        }
    });
       module.component("accodionPanel",
    { bindings:
        {
            "heading":"@" // binding  for attribute
        },
        require: {
            "parent":"^accordion"
        },
    transclude: true,
    controllerAs: "vm",
    controller: function() {
        var vm = this;
        vm.selected = false;

        vm.$onInit = function() {
            vm.parent.addPanel(vm);
        };
        vm.turnOn = function() {
            vm.selected = true;
        };
        vm.turnOff = function() {
            vm.selected = false;
        };
        vm.select= function() {
            vm.parent.selectedPanel(vm);
        }
    },
        template: "<div class='panel panel-default'>" +
            "div  class='panel-heading' ng-click='vm.select()' >" +
            "<h4 class='panel-title'> {{vm.heading}}</h4>" +
            "</div>" +
            "<div  ng- if ='vm.selected' class='panel-body' ng-transclude >" +
            " </div> </div>"
    });
}());