#!/usr/bin/env node
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const prompt = require('prompt');
const https = require('https');
var nodemailer = require('nodemailer');
const timestamp = require('time-stamp');

clear();
console.log( 
    chalk.red(
        figlet.textSync('FRENCHS FINANCIAL DATA', { horizontalLayout: 'full' })
    )
);

console.log(
    chalk.yellow("1. Go to https://www.alphavantage.co/support/#api-key and register for a free API key.")
);

console.log(
    chalk.yellow("2. Go to https://myaccount.google.com/lesssecureapps and enable less secure apps.")
);

console.log(
    chalk.yellow("3. Enter your desired stock ticker, API key, gmail username, gmail password, desired alert interval in minutes, and the phone number where you would like to receive alerts.")
);

prompt.start();

var schema = {
    properties: {
         Ticker: {},
         APIKey: {},
         Username: {},
         Password: {hidden: true, replace: '*'},
         Phone: {},
         Interval: {type: 'number'}
    }
}

prompt.get(schema, function (err, result) {
    if (err) { return onErr(err); }
    console.log(chalk.blue('Command-line input received:'));
    console.log(chalk.blue('  Ticker: ' + result.Ticker));
    console.log(chalk.blue('  APIKey: ' + result.APIKey));
    console.log(chalk.blue('  Username: ' + result.Username));
    console.log(chalk.blue('  Password: ' + 'XXXXXX'));
    console.log(chalk.blue('  Phone: ' + result.Phone));
    console.log(chalk.blue('  Interval: ' + result.Interval));
    stockAPI();
    setInterval(stockAPI, 60000 * result.Interval);

function stockAPI () {
https.get('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=' + result.Ticker + '&apikey=' + result.APIKey, (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {

    let text = JSON.parse(data)['Global Quote'];
    if (text!= undefined){
        console.log(timestamp('[YYYY:MM:DD:HH:mm:ss]') + ' ' + result.Ticker + ' price: $' + text['05. price']);
      /*---------------------------*/
			var transporter = nodemailer.createTransport({
  				service: 'gmail',
  				auth: {
    			user: result.Username,
    			pass: result.Password
  						}
					});

			var i = result.Phone;

var mailOptions = {
  from: result.Username,
  to: i + '@vtext.com,' 
    + i + '@messaging.sprintpcs.com,'
    + i + '@text.att.net,'
    + i + '@tmomail.net,'
    + i + '@vmobl.com,',
  subject: '',
  text: result.Ticker + ' price: ' + text['05. price']
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Text sent: ' + info.response);
  }
});
      /*---------------------------*/
    } else {
      console.log("ERROR");
    }
  });

});

}



});



function onErr(err) {
    console.log(err);
    return 1;
}