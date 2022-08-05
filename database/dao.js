
const pool = require ('./config')

let operations = {
  list: function(){
    return pool.promise().query('select * from dadospro')},
findById(id){},
save: function(dadospro){},
update: function(dadospro){},
remove: function(id){
      return pool.promise().execute('delete from dadospro where id= ?' , [id])
  },
}
module.exports = operations