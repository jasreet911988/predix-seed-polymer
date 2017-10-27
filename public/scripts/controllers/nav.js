'use strict';

/**
 * @ngdoc function
 * @name exelonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the exelonApp
 */
angular.module('fcaApp')
    .controller('navCtrl',[ '$scope', 'navService', '$state', '$rootScope',
        function ($scope, navService, $state, $rootScope) {
            $scope.ampsRadio = {};
            $scope.ebomRadio = {};
            $scope.fromDate = null;
            $scope.toDate = null;
            $scope.showMatchedData = false;
            $scope.ebomMarginBottomValue = '-15px';
            $scope.fromDateChange = function () {
            }
            $scope.toDateChange = function () {
            }

            navService.getNavDropDownOptionsData().then(function(resp) {
                $scope.navOptionsData = resp.data[0];
            });

            $scope.goButtonClick = function () {
                navService.getAssetListData().then(function(resp) {
                    $scope.AmpEbomData = resp.data[0]
                });
                navService.getPfsDetails().then(function(resp) {
                    $scope.pfsDetails = resp.data.pfsDetails;
                });
            }

            $scope.ampsChange = function (val) {
                $scope.ampsRadioSelectedOption = val;
                $scope.ebomSelectedVal = null;
            };

            $scope.ebomChange = function (selectedEbom) {
                $scope.ebomSelectedVal = selectedEbom;
            };

            $scope.next = function () {
                if($scope.ampsRadioSelectedOption && !$scope.ebomSelectedVal) {
                    angular.forEach($scope.AmpEbomData.AMP_PART, (amps) =>{
                        if(amps.id == $scope.ampsRadioSelectedOption) {
                            $scope.selectedAmps = amps;
                        }
                    });
                    $scope.ebomMarginBottomValue = 0;
                } else if ($scope.ebomSelectedVal) {
                    $scope.showMatchedData = true;
                    angular.forEach($scope.selectedAmps.Serial_No, (ebom) =>{
                        if(ebom.sno == $scope.ebomSelectedVal) {
                            $scope.selectedEbom = ebom;
                        }
                    });
                }
            };


            $scope.cancel = function () {
                $scope.showMatchedData = false;
            }

        }]);