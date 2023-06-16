
var knex = require('knex')({
    client: 'mysql',
    connection: {
        host : 'localhost',   
        user : 'root',      
        password : 'lirani267',  
        database : 'todo'       
     }
});

module.exports = knex