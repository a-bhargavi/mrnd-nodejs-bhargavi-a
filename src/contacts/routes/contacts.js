var express = require('express');
var router = express.Router();
var c=new Array();

/* GET contacts */
router.get('/:id', function(req, res, next) {
	res.send(c[+req.params.id]);
	
});

/*
//own function
router.get('/', function(req, res, next) {
	res.send("hello World");
});
*/

router.get('/', function(req, res, next) {
	res.send("Welcome to contacts");
	
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  c.push(req.body);
  res.send(c.length-1+"");
  
});

router.put('/:id', function(req, res, next) {
  console.log(req.body);
  var x=req.body;
  var id=req.params.id;
  
  var k=Object.keys(x);
  c[id][k]=x[k];
  
  res.send(c[id]);
});


module.exports = router;