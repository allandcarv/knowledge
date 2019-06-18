const config = require('../knexfile.js');
const knex = require('knex')(config);

knex.migrate.latest([config]); // CHAMAR AS MIGRAÇÕES COM CUIDADO, PODE NÃO SER INTERESSANTE PARA SISTEMAS MAIORES

module.exports = knex;