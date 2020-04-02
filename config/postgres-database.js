const Sequelize = require("sequelize");
const postCred = require("../config/keys").postCred;

const postDb = new Sequelize(
  postCred.database,
  postCred.user,
  postCred.password,
  postCred.dbType
);

postDb
  .authenticate()
  .then(() => console.log("DB is connected"))
  .catch(err => console.log(err));

module.exports = postDb;
