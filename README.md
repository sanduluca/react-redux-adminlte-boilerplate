# React + Redux + AdminLTE Boilerplate


## Gears
* [ReactJS](https://reactjs.org)
* [Redux](http://redux.js.org)
* [AdminLTE](https://adminlte.io)
* [Bootstrap](https://getbootstrap.com/)
* [JQuery](https://jquery.com/)

## Setup and running

Install dependencies using:
```
npm install
```

Base architecture was built using [create-react-app](https://github.com/facebookincubator/create-react-app), a great tool that build an app skeleton with all the great developing tools included, saving you from the pain to install and configure them individually.

Between included tools from Create React App there are Webpack, Babel for ES6 support, ESLint and others

Create React App defines some scripts in package.json
* start
* build
* test
* eject

You can run them using npm (they are almost all self explanatory)

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
The app is ready to be deployed!

**IMPORTANT: Do not run the eject script.**

The eject script copies all configuration files from Webpack, Babel, ESlint etc to the project root, **BUT you can't go back**
The only reason to run the eject script is if you are not happy with the default configuration provided by Create React App, but I don't think it will be the case.

Please refer to the official documetation for more details.

## Notes about AdminLTE

The theme folder contains a copy of the AdminLTE theme. Is there with all widget and pages examples. Use it as reference while building new Dashboard pages / UI.

Actually in the public folder there are copies of bower_components, plugins and other javascripts and css files required by the theme
