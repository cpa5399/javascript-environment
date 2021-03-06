/* Uses the mock schema and json-schema-faker to write fake generated data to db.json */

import jsf from 'json-schema-faker';
import {schema} from './mock-data-schema';
import fs from 'fs';
import chalk from 'chalk'

/* eslint-disable no-console */
const json = JSON.stringify(jsf(schema));

fs.writeFile('./src/api/db.json', json, (err) => {
    if (err) {
        return console.log(chalk.red(err));
    } else {
        return console.log(chalk.green("Mock data generated."));
    }
});
