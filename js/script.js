angular.module('main', ['ngDraggable'])
  .controller('Drag-Drop', function ($scope) {
    $scope.listItems = [{
      name: "nombre 1",
      title: "Opción 1"
    }, {
      name: "nombre 2",
      title: "Opción 2"
    }, {
      name: "nombre 3",
      title: "Opción 3"
    }, {
      name: "nombre 4",
      title: "Opción 4"
    },

    ];

    $scope.firstQuarterDroppedObjects = [];
    $scope.secondQuarterDroppedObjects = [];
    $scope.thirdQuarterDroppedObjects = [];
    $scope.fourthQuarterDroppedObjects = [];
    $scope.input = {};

    function removeFromTheOtherQuarter(data, excludeQuarter) {
      var firstIndex = $scope.firstQuarterDroppedObjects.indexOf(data);
      if (firstIndex > -1 && excludeQuarter != 1)
        $scope.firstQuarterDroppedObjects.splice(firstIndex, 1);
      else {
        var secondIndex = $scope.secondQuarterDroppedObjects.indexOf(data);
        if (secondIndex > -1 && excludeQuarter != 2)
          $scope.secondQuarterDroppedObjects.splice(secondIndex, 1);
        else {
          var thirdIndex = $scope.thirdQuarterDroppedObjects.indexOf(data);
          if (thirdIndex > -1 && excludeQuarter != 3)
            $scope.thirdQuarterDroppedObjects.splice(thirdIndex, 1);
          else {
            var fourthIndex = $scope.fourthQuarterDroppedObjects.indexOf(data);
            if (fourthIndex > -1 && excludeQuarter != 4)
              $scope.fourthQuarterDroppedObjects.splice(fourthIndex, 1);
          }
        }
      }
    }
    $scope.onDropCompleteFirstQuarter = function (data, evt) {
      console.log("drop success, data:", data);
      var index = $scope.firstQuarterDroppedObjects.indexOf(data);
      if (index == -1) {
        $scope.firstQuarterDroppedObjects.push(data);
        removeFromTheOtherQuarter(data, 1);
      }

    }



    $scope.onDropCompleteSeondQuarter = function (data, evt) {
      console.log("drop success, data:", data);
      var index = $scope.secondQuarterDroppedObjects.indexOf(data);

      if (index == -1) {
        $scope.secondQuarterDroppedObjects.push(data);
        removeFromTheOtherQuarter(data, 2);
      }


    }



    $scope.onDropCompleteThirdQuarter = function (data, evt) {
      console.log("drop success, data:", data);
      var index = $scope.thirdQuarterDroppedObjects.indexOf(data);

      if (index == -1) {
        $scope.thirdQuarterDroppedObjects.push(data);
        removeFromTheOtherQuarter(data, 3);
      }


    }



    $scope.onDropCompleteFourthQuarter = function (data, evt) {
      console.log("drop success, data:", data);
      var index = $scope.fourthQuarterDroppedObjects.indexOf(data);
      if (index == -1) {
        $scope.fourthQuarterDroppedObjects.push(data);
        removeFromTheOtherQuarter(data, 4);
      }


    }


  });