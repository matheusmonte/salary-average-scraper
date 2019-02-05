const cheerio = require('cheerio');

function extractSalaryFromHTML(html) {
  const $ = cheerio.load(html);
  const jobsRow = $('.listas tbody tr');
  const salaryPerJob = [];
  jobsRow.each((i, el) => {
    const job = $(el)
      .children('td')
      .slice(1)
      .eq(0)
      .text();
    const salaryAverage = $(el)
      .children('td')
      .slice(4)
      .eq(0)
      .text();
    const salaryMin = $(el)
      .children('td')
      .slice(3)
      .eq(0)
      .text();
    const salaryMax = $(el)
      .children('td')
      .slice(5)
      .eq(0)
      .text();
    salaryPerJob.push({
      job, salaryAverage, salaryMin, salaryMax,
    });
  });
  return salaryPerJob;
}

function extractJobsFromDataParsed(data) {
  const jobs = [];
  data.salaryAndJobs.forEach((item) => {
    jobs.push(item.job);
  });
  return jobs;
}

module.exports = {
  extractSalaryFromHTML,
  extractJobsFromDataParsed,
};
