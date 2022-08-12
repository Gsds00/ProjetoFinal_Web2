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

  router.get('/cadastroProduto', async function (request, response){
  let row ={
       nome:'',
       quantidade:'',
       preco:'',
       marca:'',
       disconto:''
    }
    if( request.query.id){

      [result] = await dao.findById(request.query.id)
      console.log(result)
      row= result[0] 
      console.log(row)
    }


    
    response.render('produtos/cadastroProduto',{produto: row})
});

router.post('/save', function (request, response) {
   

let operacao;
 if (request.body.id){
      operacao = dao.update
      success = `Produto Atualizado.`
 }
  else{
    operacao = dao.save
    success = `Produto Cadastrado.`
    

  }


operacao(request.body)
.then( ([result]) => {
     request.flash('success',success)
     response.redirect('/produtos')
}).catch( err => {
  console.log(err)
    request.flash('error', `nao é possivel cadastrar.`)
    response.redirect('/produtos')

    })

})

router.get('/search', function(request, response){

  if(request.query.nome){
    dao.search(request.query.nome)
    .then( ([rows]) => {
       response.render('produtos/listaProduto', {produtos: rows })
    }).catch(err => {
        console.log(err)
        request.flash('error', 'nao é possivel buscar produto')
        response.redirect('/produtos')
    })
  }else{
      response.redirect('/produtos')

  }

})

module.exports = router;