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

	// function for creating book
	function createBook($scope, params) {
		$http.post('/books', {
            name: $scope.createBookInput
        }).success(response => {
        	getBooks($scope);
            $scope.createBookInput = '';
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
		createBook,
		deleteBook
	};
});

export default bookFactory;