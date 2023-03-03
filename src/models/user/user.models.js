const { Schema, model, Types } = require('mongoose');

const UserSchema = Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    contactList: {
        type: [Types.ObjectId],
        ref: 'User',
        default: []
    }
});

module.exports = model('User', UserSchema);