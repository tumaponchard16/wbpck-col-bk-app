module.paths.push("./src");

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/books');

var Book = mongoose.model('Book', {
	title: String,
	author: String,
	publisher: String,
	pages: String,
	buy_url: String,
	img_url: String,
	create_date:{
		type: Date,
		default: Date.now
	}
});

module.exports.Book = Book;