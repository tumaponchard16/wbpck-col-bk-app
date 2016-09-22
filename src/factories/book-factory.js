// Set node path directory
module.paths.push("./src");

import _ from 'lodash';
import angular from 'angular';

const bookFactory = angular.module('app.bookFactory', [])

.factory('bookFactory', ($http) => {
	function getBooks($scope) {
		$http.get('/books').success(response => {
			$scope.books = response.books;
		});
	}

	function createBook($scope, params) {
		$http.post('/books', {
            name: $scope.createBookInput
        }).success(response => {
        	getBooks($scope);
            $scope.createBookInput = '';
        });

		// params.createHasInput = false;
		// $scope.createBookInput = '';
	}

	function deleteBook($scope, bookToDelete) {
        $http.delete(`/books/${bookToDelete._id}`).success(response => {
            getBooks($scope);
        });

        // _.remove($scope.books, book => book.task === bookToDelete.name);
    }

	return {
		getBooks,
		createBook,
		deleteBook
	};
});

export default bookFactory;