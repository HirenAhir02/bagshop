const mongoose = require('mongoose');
const config  = require('config');

const dbgr = require('debug')("development:mongoose");
// $env:DEBUG = 'development:*'
// $env:DEBUG = '' <- blank rakhvi hoy tyare 

mongoose
.connect(`${config.get("MONGODB_URI")}/bagshop`)
.then(function(){
    dbgr('connected mongodb');
})
.catch(function(err){
    dbgr(err);
})

module.exports = mongoose.connection;