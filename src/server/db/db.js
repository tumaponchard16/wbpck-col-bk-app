module.paths.push("./src");

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/books');

var Book = mongoose.model('Book', {
	name: String,
	create_date:{
		type: Date,
		default: Date.now
	}
});

module.exports.Book = Book;