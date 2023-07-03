const { connect, connection } = require('mongoose');
//normally do not want this in production just to check what is happening under the hood
// set('debug',true);
connect('mongodb://127.0.0.1:27017/usersPosts');

module.exports = connection;