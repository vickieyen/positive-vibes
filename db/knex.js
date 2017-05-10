//this file takes configuration settings from knexfile.js and uses
//  them to make an instance of knex
var config = require('../knexfile')['development'];
var knex = require('knex')(config);

module.exports = knex;
