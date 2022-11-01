# Perform cross browser testing with BrowserStack!  

The Sample test in this repository demonstrate the cross browser testing with BrowserStack.

>You can choose any language, test automation framework, and IDE of your choice to build the setup. 

## Prerequisites 
1. Ensure that you understand Cypress fundamentals and how Cypress runs tests.
2. BrowserStack Username and Access key, which you can find in your [account settings](https://www.browserstack.com/accounts/settings). If you have not created an account yet, you can sign up for a [Free Trial](https://www.browserstack.com/automate) or [purchase a plan](https://www.browserstack.com/accounts/settings).
3. [Node.js](https://nodejs.org/en/download/) installed on your machine.
5. [NPM](https://docs.npmjs.com/) installed on your machine.

### Run your first Cypress test with BrowserStack
#### Install the BrowserStack CLI. 
The BrowserStack - Cypress CLI is a command-line tool that is used to enable communication between Cypress and BrowserStack. Use the npm command to install the BrowserStack - Cypress CLI as follows:
npm install -g browserstack-cypress-cli
#### Create cypress test project under the folder "cypress/e2e". 
Once you have installed the BrowserStack CLI on your computer, create a Cypress project like you usually do. Get the sample Cypress tests generated. We are going to run those sample tests on BrowserStack! I have created a basic cypress test automation setup using BrowserStack Demo App covering 3 use cases (Login, Check out the Product & log out) to perform cross browser testing with Cypress & BrowserStack. 
If you don’t have access to an existing Cypress project, you can try running your first test using the Cypress Kitchen Sink web app.
#### Generate the BrowserStack configuration file for your project:
Navigate into your Cypress project folder and run the following command to generate the BrowserStack configuration file for your project. It will generate a sample configuration file.Modify or add the mandatory configurations that are required to run your Cypress test.
browserstack-cypress init
Things to note:
1. Replace the username and access key from your BrowserStack account
2. The generated configuration file consists of a few browsers and operating systems that your test should run. Feel free to edit the code and update the browsers lists as per your wish! 
3. The test will run on cypress-supported platforms and browsers only!
4. Cypress doesn’t support mobile testing. It’s specifically built for web developers and only supports cross browser testing. 

#### Use the following command to run your tests:
browserstack-cypress run --sync

After executing this command, you should be able to see the results on the dashboard. The dashboard is the place where you can take a peek at all your executions and results.

Here are couple reference articles to help you. 
1. [Integrate your tests - Learn how to integrate your existing Cypress tests with BrowserStack Automate.](https://www.browserstack.com/docs/automate/cypress/integrate-your-test)
2. [Cypress Automation Tutorial with BrowserStack ](https://www.browserstack.com/guide/cypress-automation-tutorial) 













