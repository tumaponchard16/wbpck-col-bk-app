// Set node path directory
module.paths.push("./src");

// importing modules
import _ from 'lodash';
import angular from 'angular';

const bookFactory = angular.module('app.bookFactory', [])

.factory('bookFactory', ($http) => {

	// function for getting all books
	function getBooks($scope) {
		$http.get('/books').success(response => {
			$scope.books = response.books;
		});
	}

	// Get book details
	function getBook($scope, $stateParams){
		var id = $stateParams.id
		$http.get(`/books/${id}`).success(response => {
			$scope.book = response;
			console.log(response);
		});
    }

	// Creating book
	function createBook($scope, params) {
		$http.post('/books', {
	        title: $scope.title,
	        author: $scope.author,
	        publisher: $scope.publisher,
	        pages: $scope.pages,
	        buy_url: $scope.buy_url,
	        img_url: $scope.img_url
	    }).success(response => {
	        window.location.href='/';
	    });
	}

	// Update book
	 function updateBook($scope, book) {
	 	var id = book._id;
        $http.put(`/books/${id}`, { 
        	title: book.title,
	        author: book.author,
	        publisher: book.publisher,
	        pages: book.pages,
	        buy_url: book.buy_url,
	        img_url: book.img_url
        }).success(response => {
        	console.log($scope.book.title);
        	window.location.href='/';
        });
    }

	// Deleting book
	function deleteBook($scope, bookToDelete) {
        $http.delete(`/books/${bookToDelete._id}`).success(response => {
            getBooks($scope);
        });
    }

	return {
		getBooks,
		getBook,
		createBook,
		updateBook,
		deleteBook
	};
});

export default bookFactory;