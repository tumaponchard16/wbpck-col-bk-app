module.paths.push("./src");

var booksRoutes = require('server/books/routes');

module.exports = function routes(app) {
	app.use('/books', booksRoutes);
};