const mongoose=require('mongoose');
const userSchema= mongoose.Schema({
    
    username: {type: String, required:true},
    cropname: {type:String, required:true},
    quantity: {type:Number, required:true},
    exprice: {type:Number, required:true}
    

});

module.exports= mongoose.model('farmer',userSchema);