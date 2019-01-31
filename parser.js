const cheerio = require('cheerio');

function extractSalaryFromHTML(html){
  const $ = cheerio.load(html);
  const jobsRow = $('.listas tbody tr');
  //console.log('Estou', jobsRow);
  const salaryPerJob = [];
  jobsRow.each((i, el) => {
    let job = $(el).children('td').text();
    salaryPerJob.push(job);
  }); 
  return salaryPerJob;  
};

module.exports = {
  extractSalaryFromHTML
}

