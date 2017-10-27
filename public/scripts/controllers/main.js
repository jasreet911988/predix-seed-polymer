'use strict';
angular.module('fcaApp')
    .controller('MainCtrl', function ($state) {
        if($state.current.name == "main"){
            $state.go('main.navigatin');
        }
    });