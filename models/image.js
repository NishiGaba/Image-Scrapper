var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var imageSchema = new Schema({
  key : String,
  url : String
  
});

module.exports = mongoose.model('Image', imageSchema);