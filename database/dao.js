
const pool = require ('./config')

let operations = {
  list: function(){
    return pool.promise().query('select * from dadospro')},
findById(id){
   return pool.promise().query('select * from dadospro where id=?', [id])
},
save: function(dadospro){
  return pool.promise().execute(' INSERT INTO dadospro(nomepr, quantidade, preco, marca, nome)VALUES (?,?,?,?,?)', [dadospro.nomepr, dadospro.quantidade, dadospro.preco, dadospro.marca,dadospro.nome])
},
update: function(dadospro){

  return pool.promise().execute('UPDATE dadospro set nomepr=?, quantidade=?, preco=?, marca=?, nome=? where id=?', [dadospro.nomepr, dadospro.quantidade, dadospro.preco, dadospro.marca, dadospro.nome, dadospro.id])
},
remove: function(id){
      return pool.promise().execute('delete from dadospro where id= ?' , [id])
  },
search: function(nome){
  return pool.promise().query('select * from dadospro where nome like ?', ['%'+nome+'%' ])
},

/*findById(id){
  return pool.promise().query('select * from dadospro, dadospro where id=?', [id])
},*/

findByUsername:function(username){
    return pool.promise().query('select * from dadospro where login=?', [username])

  },
}
module.exports = operations