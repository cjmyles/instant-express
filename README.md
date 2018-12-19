# Instant Express

Express boilerplate bundled with authentication, routing, CORS, logging, sessions, API model-mapping and more. Integrates seemlessly with the [Firebase](https://firebase.google.com/) platform to enable services such as [Firebase Admin](https://firebase.google.com/docs/reference/admin/), [Firebase Authentication](https://firebase.google.com/docs/auth/), [Cloud Firestore](https://firebase.google.com/docs/firestore/), [Cloud Storage](https://firebase.google.com/docs/storage/) and [Firebase Functions](https://firebase.google.com/docs/functions/).

## Table of Contents

- [Installation](#installation)
- [Firebase](#firebase)

## Installation

### Create Project

There are three ways to create your new React project.

#### Option 1 - Generator (recommended)

Install the [`instant-tools`](https://www.npmjs.com/package/@hbagroup/instant-tools) package from npm, and create a new project from the command line, much like you would with `create-react-app`:

`$ npm i @hbagroup/instant-tools -g`

This will install `instant-tools` globally and enable the `instant` command to be available in terminal.

Create your React application and (optionally) install dependencies (by specifiying the `-i` parameter):

`$ instant create node my-app-name -i`

#### Option 2 - Clone Repository

Clone this repository, remembering to specify a name for your new project (in this case we're calling it `my-app-name`):

`$ git clone https://github.com/JSJInvestments/node-project-template.git my-app-name`

Open the new directory and remove the existing `git` folder - this will ensure that we don't make changes to the Node Project Template repository:

```bash
$ cd my-app-name
$ rm -rf .git
```

**Important:** Failure to remove the existing .git directory will result in future git commands updating the core `node-project-template` repository, rather than your new repository.

#### Option 3 - Download Repository

Navigate to the Github repository at https://github.com/JSJInvestments/react-project-template. Click the green `Clone or download` button and click `Download ZIP`.

Extract the zip at the desired location into the directory `my-app-name`.

### Setup Project

#### Change Working Directory

Ensure you're in the root of the project directory:

`$ cd my-app-name`

#### Install Dependencies

Download dependencies to the `node_modules` folder if you haven't already (remember the generator can do this for us):

`$ npm i`

#### Initialise Git

`$ git init`

#### Initialise Firebase

`$ firebase use --add`

The `firebase use` command will provide you with a list of available Firebase projects with which to associate your codebase with (this assumes you've created a Firebase project to assign to your application and you've logged into Firebase using the cli tool `firebase-tools`):

#### `package.json`

Modify the `package.json` file to customise the `name` and `description` fields for your project (and add a `version` field if necessary - [Semantic Versioning](https://semver.org/) is strongly recommended).

### Run the Application

Start the application.

`$ npm start`

Click the hyperlink that is printed to the console to open the server in a browser.

## Firebase

Firebase is enabled by default and it's recommended for any new projects. Firebase has a host of constantly expanding features including, but not limited to:

- Authentication
- Storage
- Database
- Static web hosting (e.g React apps)
- Dynamic web hosting (e.g Node apps)

It's easy to set up, does a lot of the hard work for you (e.g. user management), and provides mechanisms and rules to restrict access to databases and storage. It's also scalable.

**Note:** The following instructions assume that you've create a Firebase Project using the [Firebase Console](https://console.firebase.google.com/).

### Configuration

The codebase utilises the `firebase-admin` package which requires a Service Account Key (see https://firebase.google.com/docs/admin/setup for more information). Your `config` file should reference the location of the `serviceAccountKey.json` file as follows:

```json
  "firebase": {
    "serviceAccountKey": "config/serviceAccountKey.json"
  }
```

**Note:** Please see [config](#config) for more information on configuration settings.

### Project aliases

You can associate the repository with an existing Firebase project.

Firebase allows us to create aliases for these projects. This can be useful if you'd like to deploy the code to multiple environments (Firebase projects), such as `staging` and `production`.

You can view a list of existing aliases and select one to associate with the repository by running the following command:

`$ firebase use`

**Note**: You may have to run `firebase login` first if you haven't already established a connection to Firebase.

You can add an aliases by running the following command:

`$ firebase use --add`

This will provide you with a list of all available Firebase projects. You can select one and provide an alias name.

All the aliases are stored in the `.firebaserc` file and can be modified manually.

**Note:** This file has been added to `.gitignore` as it's more of a user preference file than a required file. This also helps ensure code isn't accidentally deployed to the template project.

**Note:** Please do not run `firebase init` or `firebase init hosting` or `firebase init functions` as this was originally executed on the template and files amended/moved accordingly.

## Deployment

First, ensure that you are pointing at the correct Firebase project:

`$ firebase use`

Select the relevant project alias.

Now deploy the code:

`$ npm run deploy`

## Development

Prettier and ESLint have been configured to enable a coding standard along with automatic formatting. Please ensure the Prettier extension is installed in your chosen IDE (Visual Studio Code for example).

**Note:** Since most of our applications are deployed to Firebase, ES6 code cannot be used without first transpiling to ES5 as Firebase utilises Node versions 6 and 8. For the time being, it's recommended to write ES5 code and wait for Node to be upgraded on the Firebase servers.

Run the code locally:

`$ npm start`

This will initiate the `firebase serve` command.
