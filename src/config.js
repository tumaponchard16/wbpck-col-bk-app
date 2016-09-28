import angular from 'angular';
import uiRouter from 'angular-ui-router';
import bookFactory from 'factories/book-factory';
import booksController from 'books/books';

const app = angular.module('app', [uiRouter, bookFactory.name]);

app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('books', {
			url: '/',
			template: require('books/books.html'),
			controller: booksController
		})

		.state('add-book', {
			url: '/add-book',
			template: require('books/add-book.html'),
			controller: booksController
		})

		.state('book-detail', {	
			url: '/book-detail/:id',
			template: require('books/book-detail.html'),
			controller: booksController
		})

		.state('edit-book', {	
			url: '/edit-book/:id',
			template: require('books/edit-book.html'),
			controller: booksController
		})

		.state('about', {
			url: '/about',
			template: require('about/about.html'),
			controller: booksController
		});

		$locationProvider.html5Mode(true);
});

export default app;