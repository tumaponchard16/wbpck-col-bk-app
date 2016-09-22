import _ from 'lodash';

export default function($scope, bookFactory) {
	let params = {
		createHasInput: false
	}

	// let dscrption = 'Lorem ipsum dolor sit amet, cibo sonet vel an, te per affert soleat, est ea numquam habemus epicuri. His perpetua consectetuer id. Ex altera vivendo his, id sit habeo zril everti. An agam mundi dissentias has, mei ad utamur salutatus reprehendunt.';

	// $scope.books = [
	// 	{
	// 		name: 'Book1',
	// 		author: 'Richard1',
	// 		publisher: 'publisher1',
	// 		genre: 'Horror',
	// 		description: dscrption
	// 	},
	// 	{
	// 		name: 'Book2',
	// 		author: 'Richard2',
	// 		publisher: 'publisher2',
	// 		genre: 'Suspense',
	// 		description: dscrption
	// 	},
	// 	{
	// 		name: 'Book3',
	// 		author: 'Richard3',
	// 		publisher: 'publisher3',
	// 		genre: 'Drama',
	// 		description: dscrption
	// 	}
	// ];

	bookFactory.getBooks($scope);

	// $scope.createBook = () => {
	// 	params.createHasInput = false;
	// 	$scope.createBookInput = '';
	// };
	const { createBook, deleteBook } = bookFactory;
	
	$scope.createBook = _.partial(createBook, $scope, params);
	// $scope.deleteBook = bookToDelete => {
	// 	_.remove($scope.books, book => book.name === bookToDelete.name);
	// };
	$scope.deleteBook = _.partial(deleteBook, $scope);

	$scope.$watch('createBookInput', val => {
		if (!val && params.createHasInput) {
			$scope.books.pop();
			params.createHasInput = false;
		} else if(val && !params.createHasInput) {
			$scope.books.push({ name: val, description: dscrption})
			params.createHasInput = true;
		} else if (val && params.createHasInput) {
			$scope.books[$scope.books.length -1].name = val;
		}
	});
}