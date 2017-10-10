# javascript-environment

### Building a Javascript Development Environment
https://app.pluralsight.com/library/courses/javascript-development-environment/table-of-contents

This tutorial covered several things to consider while creating a custom starter kit for Javascript projects:

* .editorconfig
* Package management
* Development web server
* Automation
* Transpiling
* Bundling
* Linting
* Testing and CI
* HTTP calls
* Project structure
* Production build
* Production deploy

### Development Server:
* Simple express server
* WIP tunnel: https://ngrok.com/

### Automation
* npm scripts - https://docs.npmjs.com/misc/scripts
* scripts were added for starting the server, running a package security check, and running a tunnel through ngrok

### Transpiling
* .babelrc - preset to use the latest features

### Bundling with Webpack
* Basic config with inline source mapping

### Linting with ESLint
* ESLint's recommended preset
* Additional rule for `no-console`. Console statements will get flagged as warnings
* Added an optional watch flag that can be run using `npm run lint:watch`

### Unit Testing with Mocha
* Chai - assertion library http://chaijs.com/
* JSDOM - helper library, emulates DOM structure https://github.com/tmpvar/jsdom
* Unit tests are placed alongside corresponding src files 
* Tests are run automatically on each save

### Continuous Integration with Travis CI
* .yml added to specify node version

### Making HTTP Calls
* Native Fetch API
* Public facing methods for 'get' and 'delete'
* Under the hood methods using Fetch for 'get' and 'delete'

### Mock HTTP Calls
* JSON-schema-faker was used for defining the structure of the JSON
* JSF uses three core libraries for formatting and generating fake data:
    * faker.js
    * chance.js
    * regexp
* JSON-server was used to serve the generated JSON over HTTP to use with the mock API

### Production Builds
* Production webpack config to output the bundle to the dist directory and enable source maps
* Local server set up to serve from the dist directory
* URL check for the 'useMockAPI' query string parameter to toggle the use of the mock data VS the production data
set up with express
* Additional npm scripts added to build/serve the bundle
* HtmlWebpackPlugin was used to dynamically generate a minified index.html where Webpack will inject bundle scripts
* Bundle spliting: A separate bundle was created for vendor libraries so that they can be cached separately
    * The CommonsChunkPlugin is responsible for ensuring that files in the vendor bundle only get downloaded in that
    bundle and not the main bundle
* Cache busting - 
    * MD5 hashes are added to the bundle names so that the names only changes when updates to the code are made. 
    Because of HTMLWebpackPlugin, the HTML dynamically updates with the new file names.
    * Cache busting/source mapping was also enabled for CSS
* Error logging - TrackJS 
    * EJS conditional added to only add the tracking script in the production build
    
### Production Deploy
* Starter, bare bones API located here: https://github.com/cpa5399/js-dev-env-demo-api
* Using Heroku to host the the API: https://batman-chicken.herokuapp.com/
* Modified `getBaseUrl` to switch to the heroku URL for production if the query string param isn't appended
* Added a script to deploy the UI to Surge: http://mysterious-bushes.surge.sh/
* Separation of concerns: the API and UI are now hosted separately 



