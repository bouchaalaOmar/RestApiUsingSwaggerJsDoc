var mongoose=require('mongoose');

//Generate Schema
var userSchema=mongoose.Schema({
	nom:{
		type:String,
		required:true

	},
	prenom:{
		type:String,
		required:true

	}
});

var User=module.exports = mongoose.model('User',userSchema);

