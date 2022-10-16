const mariadb = require('mariadb');

const pool = mariadb.createPool({
     host: '192.168.1.10', 
     user:'test', 
     password: 'admin12345',
     connectionLimit: 5,
     database: 'ascmdatabase'
});

module.exports= pool