'use strict';
const request = require('axios');
const fs = require('fs');

const {extractSalaryFromHTML} = require('./parser.js');
const {extractJobsFromDataParsed} = require('./parser.js');

module.exports.getsalaryaverage = (event, context, callback) => {
  request('https://www.salario.com.br/tabela-salarial/?cargos=')
    .then(({data}) => {
      const salaryAndJobs = extractSalaryFromHTML(data);
      const jobs = extractJobsFromDataParsed({salaryAndJobs});
      fs.writeFileSync("./salaryaverage.json",JSON.stringify({salaryAndJobs}), (err) =>{
        console.log("salary average create", err)
      });
      fs.writeFileSync("./jobs.json", JSON.stringify({jobs}), (err) =>{
        console.log("job file create", err);
      });
      callback(null, "files generate success"); 
    })
    .catch(callback);
};

module.exports.getsalarybyjob = (event, context, callback) =>{
  let content = fs.readFileSync("./salaryaverage.json","UTF-8");
  let parsedContent = JSON.parse(content); 
  let searchResult = parsedContent.salaryAndJobs.find(x => x.job.toUpperCase() === event.job.toUpperCase());
  searchResult = searchResult !== undefined ? searchResult : {err : "job's salary not found"};
  callback(null, searchResult);
};
