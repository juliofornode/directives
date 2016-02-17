(function () {

    "use strict";

    angular.module('widget001', [])

        .controller('W1Controller', ['$scope', function ($scope) {

            $scope.julio = {
                name: "Julio",
                age: 44,
                sisters: [
                    {
                        name: "Mariau",
                        age: 45
                    },
                    {
                        name: "Belen",
                        age: 42
                    },
                    {
                        name: "Lourdes",
                        age: 40
                    }
                ]
            };

            $scope.mariau = {
                name: "Mariau",
                age: 45,
                sisters: [
                    {
                        name: "Julio",
                        age: 44
                    },
                    {
                        name: "Belen",
                        age: 42
                    },
                    {
                        name: "Lourdes",
                        age: 40
                    }
                ]
            };


        }] )

        .directive('widget001', function () {

            return {

                restrict: "E",

                scope: {
                    user: '=',
                    expand: '@'
                },

                controller: function($scope) {

                    var toBoolean = false;

                    if ($scope.expand === 'true') {
                        toBoolean = true;
                    }

                    $scope.expanded = toBoolean;

                    $scope.toggle = function () {

                        $scope.expanded = !$scope.expanded;

                    };

                    $scope.marked = false;

                    $scope.mark = function () {
                        $scope.marked = !$scope.marked;
                    }

                },

                templateUrl: 'directives/widgetDirectives/widget001/widget001.tpl.html',

            }

        });

}());