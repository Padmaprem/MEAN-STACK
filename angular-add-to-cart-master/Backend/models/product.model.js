const mongoose = require('mongoose');
const schema= mongoose.Schema;

let ProductSchema= new schema({
 
    strImage:{
        type:String,
        required:true
        
    },
    strName:{
        type:String,
        required:true,
        max:100
    },
    strdescription:{
        type:String,
        required:true,
        max:200
    },
    intPrice:{
        type:Number,
        required:true,
    },

    createdAt: { type: Date, default: Date.now }
}, { versionKey: false });

module.exports = mongoose.model('Product', ProductSchema);

