
const pool = require ('./config')

let operations = {
  list: function(){
    return pool.promise().query('select * from dadospro')},
findById(id){},
save: function(dadospro){},
update: function(dadospro){},
remove: function(id){},

}
module.exports = operations