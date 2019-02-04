'use strict';
const request = require('axios');
const fs = require('fs');

const {extractSalaryFromHTML} = require('./parser.js');

module.exports.getsalaryaverage = (event, context, callback) => {
  request('https://www.salario.com.br/tabela-salarial/?cargos=')
    .then(({data}) => {
      const salary = extractSalaryFromHTML(data); 
      fs.writeFileSync("./salaryaverage.json",JSON.stringify({salary}), function (err){
        console.log("salary average create", err)
      });
      callback(null, {salary}); 
    })
    .catch(callback);
};
