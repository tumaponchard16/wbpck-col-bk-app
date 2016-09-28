module.paths.push("./src");

var mongoose = require('mongoose');
var Book = require('server/db/db').Book;
var express = require('express');
var router = express.Router();

// router.get('/hello', function(req, res) {
//     res.send('hellooooooooooooooooooooooooo!');
// });

// Get all books
router.get('/', function(req, res) {
    Book.find(function(err, results) {
    	if (err) {console.log(err);}

    	res.send({ books: results });
    });
    // res.send('hellooooooooooooooooooooooooo!');
});

//Get single book by id
router.get('/:_id', function(req, res){
    Book.findById(req.params._id, function(err, result){
        if (err) {console.log(err);}
        
        res.send( result );
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

// Update book
router.put('/:id', function(req, res) {
    var id = req.params.id;
    Book.update({ _id: mongoose.Types.ObjectId(id) }, {
        $set: { 
            title: req.body.title,
            author: req.body.author,
            publisher: req.body.publisher,
            pages: req.body.pages,
            buy_url: req.body.buy_url,
            img_url: req.body.img_url
        }
    }, function(err) {
        if (err) { console.log(err); }

        res.send('Book updated');
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