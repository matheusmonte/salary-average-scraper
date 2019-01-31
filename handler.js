'use strict';
const request = require('axios');
const {extractSalaryFromHTML} = require('./parser.js');

module.exports.getsalaryaverage = (event, context, callback) => {
  request('https://www.salario.com.br/tabela-salarial/?cargos=')
    .then(({data}) => {
      const salary = extractSalaryFromHTML(data);
      callback(null, {salary}); 
    })
    .catch(callback);
};
