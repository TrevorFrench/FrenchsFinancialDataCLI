# French's Financial Data CLI

<img src="http://old.trevorfrench.com/views/FFDCLI.PNG"/>

This repository contains the code for French's Financial Data CLI.

# Step 1: Obtain a Free API KEY
  - Go to https://www.alphavantage.co/support/#api-key
  - Fill out the quick form and press "GET FREE API KEY"
  - Record your key for future use.

# Step 2: Enable Less-Secure Apps
  - This program integrates with the gmail API to send notifications from your email account.
  - In order to do this, you must enable less-secure apps (or create an <a href="https://support.google.com/accounts/answer/185833?hl=en">App password</a>).
  - Go to https://myaccount.google.com/lesssecureapps
  - Press "enable less-secure apps"
  
# Step 3: Make sure that Node.js is installed
  - Node.js can be installed <a href="https://nodejs.org/en/download/">here</a> if you don't already have it installed on your device
  
# Step 4: Download the Package
  - The package can be downloaded using ``npm install frenchsfinancialdatacli``
  
  or
  - The package can be downloaded directly or by pasting the following into your command line:

``
git clone "https://github.com/TrevorFrench/FrenchsFinancialDataCLI.git"
``

# Step 5: Run the Program
 - The program can be executed by navigating to the bin directory on your command line and typing ``node index.js`` or by simply typing ``stocks`` into your command line from any directory on your computer.
 -If you run into issues using the "stocks" command, try installing the module gloablly using ``npm install -g frenchsfinancialdatacli``

# Step 6: Follow prompts to execute successfully

**NOTE:** Variables such as API key and username can be hard coded into the index.js file for quicker access.
