const fs = require('fs');
const path = require('path');

const Handlebars = require('handlebars');

require('./helpers');

/**
 * Boostrap template plugin for doxdox.
 *
 * @example parseInputs(inputs, {'parser': 'dox', 'layout': 'bogie'}).then(content => console.log(content));
 * @param {Array} data Methods parsed using a doxdox parser.
 * @return {Promise} Promise with generated content.
 * @public
 */

const plugin = data =>
    new Promise((resolve, reject) => {

        fs.readFile(
            path.join(__dirname, 'template.hbs'),
            'utf8',
            (err, contents) => {

                if (err) {

                    return reject(err);

                }

                const template = Handlebars.compile(contents);

                // This can be removed after the template is completely finished. Generally used for debugging.
                data.stringified = JSON.stringify(data);

                return resolve(template(data));

            }
        );

    });

module.exports = plugin;
