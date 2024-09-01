const mongoose = require('mongoose');

const connectDB = url => {
	return mongoose.connect(url);
};

module.exports = connectDB;

// w wersji 5 mongoose
// mongoose.connect(connectionString), {
// useNewUrlParser: true,
// useCreateIndex: true,
// useFindAndModify: false,
// useUnifiedTopology: true,
// })
