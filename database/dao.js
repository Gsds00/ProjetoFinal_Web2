
const pool = require ('./config')

let operations = {
  list: function(){
    return pool.promise().query('select * from dadospro')},
findById(id){
   return pool.promise().query('select * from dadospro where id=?', [id])
},
save: function(dadospro){
  return pool.promise().execute(' INSERT INTO dadospro(nome, quantidade, preco, marca, disconto)VALUES (?,?,?,?,?)', [dadospro.nome, dadospro.quantidade, dadospro.preco, dadospro.marca,dadospro.disconto])
},
update: function(dadospro){

  return pool.promise().execute('UPDATE dadospro set nome=?, quantidade=?, preco=?, marca=?, disconto=? where id=?', [dadospro.nome, dadospro.quantidade, dadospro.preco, dadospro.marca, dadospro.disconto, dadospro.id])
},
remove: function(id){
      return pool.promise().execute('delete from dadospro where id= ?' , [id])
  },
search: function(nome){
  return pool.promise().query('select * from dadospro where nome like ?', ['%'+nome+'%' ])
}
}
module.exports = operations