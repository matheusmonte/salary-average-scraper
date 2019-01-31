'use strict';
const request = require('axios');

module.exports.getsalaryaverage = (event, context, callback) => {
  request('https://www.salario.com.br/tabela-salarial/')
    .then(({data}) => {
      callback(null, data); 
    })
    .catch(callback);
};
