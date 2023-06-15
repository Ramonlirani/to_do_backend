const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

var knex = require('knex')({
    client: 'mysql',
    connection: {
        host : 'localhost',   
        user : dbUser,      
        password : dbPassword,  
        database : 'todo'       
     }
});

module.exports = knex