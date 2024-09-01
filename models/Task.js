const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'must provide name'],
		trim: true, //wywalenie białych znaków
		maxlength: [20, 'name can not be longer than 20 characters'],
		minlength: [5, 'name can not be shorter than 5 characters'],
	},
	completed: { type: Boolean, default: false },
});

module.exports = mongoose.model('Task', TaskSchema);
