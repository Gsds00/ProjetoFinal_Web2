var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'projeto', 
    produtos: ['feijao', 'arroz', 'macarrao']

    
  });
});

module.exports = router;
