const mongoose = require('mongoose');

const connect = async()=>{
await mongoose.connect('mongodb+srv://learning_mongo:lq3EkmBTNoEHdIxM@learningmongo.f6asjad.mongodb.net/devConnect');
};

module.exports = connect;

