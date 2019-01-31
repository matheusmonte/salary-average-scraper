const cheerio = require('cheerio');

function extractSalaryFromHTML(html){
  const $ = cheerio.load(html);
  const jobsRow = $('.listas tbody tr');
  //console.log('Estou', jobsRow);
  const salaryPerJob = [];
  jobsRow.each((i, el) => {
    console.log($(el).children('td').text());
  }); 
  return jobsRow;  
};

module.exports = {
  extractSalaryFromHTML
}

