(function(){

'use strict';

        angular.module("LunchCheck", [])

                .controller("LunchCheckController", LunchCheckFunction);

                LunchCheckFunction.$inject = ["$scope"];

                function LunchCheckFunction($scope)
                {
                   $scope.lunchList = "";
                   $scope.responseMessage = "";
                   $scope.answerType = "";
                   $scope.buttonType = "primary";


                   $scope.checkLunchList = function()
                   {
                      var lunchItems = preOperation();
                      setResponse(lunchItems);
                   }

                   $scope.clear = function () {
                     $scope.clearLunchList();
                     $scope.responseMessage = "";
                     $scope.answerType = "";
                   }

                   $scope.clearLunchList = function()
                   {
                           $scope.lunchList = "";
                           $scope.buttonType = "primary";

                   }

                   $scope.setAnswerType = function(value)
                   {
                      $scope.answerType = value;
                   }


                   function setResponse(items)
                   {
                           if(items.length <= 3 && items.length > 0)
                           {
                              $scope.responseMessage = "Enjoy!";
                              $scope.setAnswerType("positive");
                              $scope.buttonType = "success"
                           }
                           else if(items.length === 0)
                           {
                              $scope.responseMessage = "Please enter data first";
                              $scope.clearLunchList();
                              $scope.setAnswerType("negative");
                              $scope.buttonType = "danger"

                           }
                           else
                           {
                              $scope.responseMessage = "Too much!";
                              $scope.setAnswerType("positive");
                              $scope.buttonType = "warning"
                           }

                   }

                    function preOperation()
                    {
                      var items = separateStringByComma($scope.lunchList);
                      return removeEmptySpace(items);
                    }

                   function separateStringByComma(value)
                   {
                      console.log(value.split(','));
                      return value.split(',');
                   }

                    function removeEmptySpace(items)
                    {
                      var spaceRemovedItems = [];
                      for(var i = 0; i < items.length; i++)
                      {
                              var trimmedValue =  items[i].trim();
                              console.log(trimmedValue);
                              if(trimmedValue)
                              {
                                  spaceRemovedItems[i] = trimmedValue;
                              }
                      }
                      return spaceRemovedItems;
                    }
                }
})();
