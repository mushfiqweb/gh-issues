# Get a list of issues for a given Github repository by its owner and name

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install` or `yarn` depending on your package manager

This will install all the required packages.


### `npm start` or `yarn start` depending on your package manager

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


## Need to create `.env` file
1. Create a new file named `.env` file in the root directory.
2. Copy the contents of `.env.template` to `.env`
3. Find a env variable named `REACT_APP_GITHUB_USER_TOKEN`
4. Now go to your Github profile and create your own Personal access token
5. If do not know how to create a Personal access token, then [follow these steps](https://docs.github.com/en/enterprise-server@3.4/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
6. Add your own Personal access token


## Used  [OctoKit REST](https://octokit.github.io/rest.js/v18) to access github `API`s

## TODOs:
1. Add Unit Test
2. Add pagination
3. There is a massive scope to improve the [TextInput](https://github.com/mushfiqweb/gh-issues/tree/master/src/components/TextInput) component.

