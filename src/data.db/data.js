const knex = require('knex')({
    client: 'mysql',
    connection: {
        host : '127.0.0.1',
        user : 'root',
        password : '',
        database : 'blog'
    }
  });

  const tblPost = () => knex('posts')
  const tblComments = () => knex('comments')

  module.exports = {
      TblPosts: tblPost,
      TblComments: tblComments
  }