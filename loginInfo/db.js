var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'database-1.c1hhwbdn7loo.ap-northeast-2.rds.amazonaws.com',
    user: 'admin',
    password: '9402Yoon!',
    database: 'login'
});
db.connect();

module.exports = db;