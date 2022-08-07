
const pool = require ('./config')

let operations = {
  list: function(){
    return pool.promise().query('select * from dadospro')},
findById(id){},
save: function(dadospro){
  return pool.promise().execute(' INSERT INTO dadospro(nome, quantidade, preco, marca, disconto)VALUES (?,?,?,?,?)', [produto.nome, dadospro.quantidade, dadospro.preco, dadospro.marca,dadospro.disconto])
},
update: function(dadospro){},
remove: function(id){
      return pool.promise().execute('delete from dadospro where id= ?' , [id])
  },
}
module.exports = operations