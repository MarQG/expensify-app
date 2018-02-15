# Expensify Version 1.0

Expensify is a fast and friendly way to track your expenses. It gives users a simple but elegant platform for managing their expenses by allowing them to add, edit, and filter their expenses based on their needs.

## Tech Used

* ReactJS   - Powers the entire front-end.
* Redux     - Managing React State App wide.
* Firebase  - Provides User Managment and Real-Time Database
* Jest      - React Unit Testing
* Webpack   - Application Bundling

## Login

Using the power of Google Firebase you can login via your google account of choice.

## Dashboard

The Main Dashboard shows a list of all expenses you are currently tracking based on the date range specified. Need to see a different time period? Simply use the date picker to change the date. You can also add expenses or click on an expense to manage it's details. Lastly you can search your expenses and sort them easily through the built in search.

## Start your own project

Feel free to clone this repo and build your own version of Expensify!

### Development
After you have cloned the repo simply setup the two .env files as follows with your firebase configuration info to work on the application.

Step 1: in your root directory run:
> `touch .env.test .env.development`
Step 2: open each of the files and add the following keys in each.
`FIREBASE_API_KEY=<your_firebase_api_key>
FIREBASE_AUTH_DOMAIN=<your_firebase_auth_domain>
FIREBASE_DATABASE_URL=<your_firebase_database_url>
FIREBASE_PROJECT_ID=<your_firebase_project_id>
FIREBASE_STORAGE_BUCKET=<your_firebase_storage_bucket>
FIREBASE_MESSAGING_SENDER_ID=<your_firebase_messaging_sender_id>`

Then save.


Afer that run to start the dev server:
>`yarn run dev-server`

### Testing
To run testing you can enter to follow commands to start the test suite:
> `yarn test -- --watchAll`

### Production
To start the server you need to follow two steps:
Step 1: `yarn run build:prod`
Step 2: `yarn start`

This will start the webpack process to create a production ready bundle of Expensify for you to server on your favorite deployment tool or run locally.

### Heroku Deploy
If you are going to deploy to heroku the webpack server is already setup for deployment. simply setup your heroku create your project folder and push to heroku:
> `git push heroku master`

__Strong__ Don't forget to setup the same keys you setup in your .env files in your heroku Congif Vars to get firebase working on heroku. __Strong__

This will start the deployment to heroku process and heroku and webpack will build the app for you. 


