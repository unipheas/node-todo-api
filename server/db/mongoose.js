var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp' || 'mongodb://polyphasicdevs:8xAa7YakNkNjHqCNQvKL6DXY2NKeT6wsc6Fr@ds135800.mlab.com:35800/node-todo-api');

module.exports = {mongoose};
