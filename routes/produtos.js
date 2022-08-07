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
     .then( ([result]) => {
      console.log(result)
      if(result.affectedRows > 0)
      request.flash('success', 'Produto apagado.')
      else
        request.flash('sucess', `nao foi encontrado no dados produto com id = ${request.body.id}`)
     response.redirect('/produtos')

     }).catch(err => {
        console.log(err)
        request.flash('error', 'Ocorreu um erro ao apagar o produto.')
        response.redirect('/produtos')

     })    
  })

  router.get('/cadastroProduto', function (request, response){
    response.render('produtos/cadastroProduto')
});

router.post('/save', function (request, response) {
dao.save(request.body)
.then( ([result]) => {
     request.flash('success',`produto cadastrado.`)
     response.redirect('/produtos')
}).catch( err => {
  console.log(err)
    request.flash('error', 'nao é possivel cadastrar.')
    response.redirect('/produtos')

})

})

module.exports = router;