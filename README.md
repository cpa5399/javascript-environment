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
