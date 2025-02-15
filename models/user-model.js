const mongoose = require('mongoose');

// mongoose.connect(`mongodb://localhost/bagshop`);

const userSchema = mongoose.Schema({
    fullname : String,
    email : {
        type: String,
    },
    password  : String,
    cart : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'product',
    }],
    orders : {
        type : Array,
        default : []
    },
    contact : Number,
    picture : String
})

module.exports = mongoose.model('user',userSchema);