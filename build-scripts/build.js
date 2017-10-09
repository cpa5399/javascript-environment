/* Generates a production ready minified webpack build */

/*eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generated minified bundle for production. This may take a few minutes...'));

webpack(webpackConfig).run((err, stats) => {
    if (err) { // A fatal error occurred. Stop here.
        console.log(chalk.red(err));
        return 1;
    }

    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(error => console.log(chalk.red(error)));
    }

    if (jsonStats.hasWarnings) {
        console.log(chalk.yellow('Webpack generated the following warnings: '));
        jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
    }

    console.log(`Webpack stats: ${stats}`);

    // If it got here, the build succeeded
    console.log(chalk.green('Your app has been built for production and written to /dist'));

    return 0;
});
