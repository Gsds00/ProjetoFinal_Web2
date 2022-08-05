var express = require ('express');
const { render } = require('../app');
var router = express.Router();
var dao = require('../database/dao')

router.get('/', function (request, response){
    dao.list().then( ([rows]) => {
      response.render('produtos/listaProduto', { produtos: rows})
    }).catch(err => {
        console.log(err)
        response.render('produtos/listaProduto', { produtos: [] })
    })  

});

  router.post('/delete', function (request, response) {
     dao.remove(request.body.id)
     .then( ([rows]) => {
        response.redirect('/produtos')

     }).catch(err => {
        console.log(err)
        response.redirect('/produtos')

     })


    
  })


router.get('/cadastroProduto',function(request, response){
    response.render('produtos/cadastroProduto')
});

module.exports = router;