# salary-average-scraper
Simple scraper to get salary average using node and lambda

## Local Use

Install serverless framework globally in your machine

```npm install serverless -g```

after this, enter in your project folder and run npm install

```npm install```

and now use serverless to run the project method to generate initial file to be used

```serverless invoke local --function getsalaryaverage```

Make sure you have internet connection and the function results will be showed in console

After this, you can test a api search from console using this command

```serverless invoke local --function getsalarybyjob --data '{"job" : "Abacaxicultor"}'``` 

the search result willbe showed in console
