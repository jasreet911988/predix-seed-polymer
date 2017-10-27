'use strict';

angular.module('fcaApp').service('navService', function ($http, $q) {
    this.getNavDropDownOptionsData = function () {
        var deffered = $q.defer();
        $http.get('./scripts/sample-data/nav.json')
            .then(function (resp) {
                deffered.resolve(resp);
            }, function (errorResp) {
                console.log('error');
                deffered.reject(errorResp);
            });

        return deffered.promise;

    };


    this.getAssetListData = function() {
        var deffered = $q.defer();
        $http.get('./scripts/sample-data/assets.json')
            .then(function (resp) {
                deffered.resolve(resp);
            }, function (errorResp) {
                console.log('error');
                deffered.reject(errorResp);
            });

        return deffered.promise;
    };

    this.getPfsDetails = function() {
        var deffered = $q.defer();
        $http.get('./scripts/sample-data/pfs.json')
            .then(function (resp) {
                deffered.resolve(resp);
            }, function (errorResp) {
                console.log('error');
                deffered.reject(errorResp);
            });

        return deffered.promise;
    };



});




