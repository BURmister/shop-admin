const mongoose = require('mongoose');

// var schema = new mongoose.Schema({
//     name : {
//         type : String,
//         required: true
//     },
//     email : {
//         type: String,
//         required: true,
//         unique: true
//     },
//     gender : String,
//     status : String
// })

var schema = new mongoose.Schema({
   key: {
      type: String,
      required: true,
      unique: true
   },
   name: {
      type: String,
      required: true,
   },
   price: String,
   amount: Number,
   status: String,
});

const productsCollection = mongoose.model('products', schema);

module.exports = productsCollection;
