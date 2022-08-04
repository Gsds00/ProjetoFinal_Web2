var express = require ('express');
var router = express.Router();

router.get('/' , function (request, response){
    response.render('produtos/listaProdutos')
});
router.get('/cadastroProduto',function(request, response){
    request.render('produtos/cadastroProduto')
});

module.exports = router;