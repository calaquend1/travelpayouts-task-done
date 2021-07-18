## Getting started

1. Install the dependencies
	* Run `npm install` or `npm i`
2. Build the library
  * Run `npm run build` to produce minified version.
3. Development mode
  * Run `npm run dev` to generate a non-minified library and a watcher to get compilation on file change.
4. Run the server
  * To view in a browser or run tests, start a local server `npm run server` then go to `localhost:3030` or `localhost:3000`
5. Run the tests
  * Run the tests in headless mode `npm run test`
  * Run the tests through the Cypress GUI `npm run cypress`

## Features

* Webpack-based
* ES6 as a source
* Exports in a [umd](https://github.com/umdjs/umd) format so the library works everywhere
* Testing with [Cypress](http://cypress.io)

## Process

```
ES6 source files
       |
       |
    webpack
       |
       +--- babel, eslint
       |
  ready to use
     library
  in umd format
```

## Tests

Testing with Cypress 

- [Docs](https://docs.cypress.io)
- [Examples](https://github.com/cypress-io/cypress-example-recipes/tree/master/examples)
