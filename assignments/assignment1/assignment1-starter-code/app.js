(function () {
    'use strict';

    angular.module('LunchChecker', [])

        .controller('LunchCheckerController', function ($scope) {
            $scope.itemList = "";
            $scope.message = "";
            $scope.color = "";

            $scope.checkIfTooMuch = function () {
                var count = AreItemsEnough($scope.itemList);

                if(count <=0) {
                    $scope.message = "Please enter the data first";
                    $scope.color = "";
                } else if (count <= 3) {
                    $scope.message = "Enjoy !!";
                    $scope.color = "green";
                } else {
                    $scope.message = "Too much !!";
                    $scope.color = "red";
                }
            };

            function AreItemsEnough(entry) {
                var totalStringValue = 0;
                var items = entry.split(",",-1)

                var count = 0;
                //Don't count empty entries
                for (var i = 0; i < items.length; i++) {
                    if (items[i].trim() !== "")
                        count++;
                }
                return count;
            }
        });

})();
