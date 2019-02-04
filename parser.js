const cheerio = require('cheerio');

function extractSalaryFromHTML(html){
  const $ = cheerio.load(html);
  const jobsRow = $('.listas tbody tr');
  const salaryPerJob = [];
  jobsRow.each((i, el) => {
    let job = $(el).children('td').slice(1).eq(0).text();
    let salary = $(el).children('td').slice(4).eq(0).text();
    
    salaryPerJob.push({job, salary});
  }); 
  return salaryPerJob; 
};

module.exports = {
  extractSalaryFromHTML
}
