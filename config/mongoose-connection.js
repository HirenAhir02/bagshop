const mongoose = require('mongoose');

mongoose
.connect(`mongodb://127.0.0.1:27017/bagshop`)
.then(function(){
    console.log('connected mongodb');
})
.catch(function(err){
    console.log(err);
})

module.exports = mongoose.connection;