module.paths.push("./src");

var mongoose = require('mongoose');
var Book = require('server/db/db').Book;
var express = require('express');
var router = express.Router();

// get all books
router.get('/', function(req, res) {
    Book.find(function(err, results) {
    	if (err) {console.log(err);}

    	res.send({ books: results });
    });
});

// Create book
router.post('/', function(req, res) {
	var book = new Book(req.body);
	book.save(function(err) {
		if (err) { console.log(err); }

		console.log('saved!!!');
		res.send('SUCCESS!');
	});
});

// Deleting book
router.delete('/:id', function(req, res) {
    var id = req.params.id;
    Book.remove({ _id: mongoose.Types.ObjectId(id) }, function(err) {
        if (err) { console.log(err); }

        res.send('Book deleted');
    });
});

// exporting the router to be accesible into another file
module.exports = router;