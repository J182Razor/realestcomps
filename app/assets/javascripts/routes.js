(function() {

    'use strict';

    angular
        .module('app')
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('search', {
                    url: '/',
                    templateUrl: 'search/search.html',
                    controller: 'PropertyController as vm'
                })
                .state('property', {
                    url: 'property',
                    templateUrl: 'property/property.html',
                    controller: 'PropertyController as vm'
                })
                .state('property.comp', {
                    url: '/comps/:compId',
                    templateUrl: 'comp/comp.html',
                    controller: 'CompController as vm'
                })
                .state('about', {
                    url: '/about',
                    templateUrl: 'home/about.html'
                })
                .state('comments', {
                    url: '/comments',
                    templateUrl: 'comments/comment.html',
                    controller: 'CommentsController as vm'
                });

            $urlRouterProvider.otherwise('/');
        });

}());