/*
 * @author  Nishi Gaba
*/
let express = require('express');
let router  = express.Router( {mergeParams : true} );
var Image = require('../../models/image');

console.log('it comes here');

//REST API CALLS

//GETTING IMAGES
router.get('/', function(req,res) {
	Image.find(function(err,images) {
		console.log(images);
		res.send(images);
	});
}); 

//SAVE IMAGES
router.post('/', function(req,res) {
	console.log('image post');
	let newImage = new Image({
		key : req.body.key,
		url : req.body.url
	});

	newImage.save((err,image)=> {
		if(err) {
			res.json({msg: 'Failed to add image'});
		} else {
			res.json({msg: 'Image Added Successfully'});
		}
	})
}); 

//UPDATE IMAGES
router.put('/:img_id', function(req,res) {
	console.log('Image put!!!');
}); 

//DELETE IMAGES
router.delete('/:img_id', function(req,res) {
	console.log('Image delete!!!');

	Image.remove({id: req.params.id},function(err,result) {
		if(err) {
			res.json(err);
		} else {
			res.json(result);
		}
	});
}); 


module.exports = router;
