'use strict';

module.exports = () => {
  let output;
  output = '# Meteor packages used by this project, one per line.\n' +
    '# Check this file (and the other files in this directory) into your repository.\n' +
    '#\n' +
    '# \'meteor add\' and \'meteor remove\' will edit this file for you,\n' +
    '# but you can also edit it by hand.\n\n' +
    'meteor-base@1.0.4             # Packages every Meteor app needs to have\n' +
    'mobile-experience@1.0.4       # Packages for a great mobile UX\n' +
    'mongo@1.1.10                   # The database Meteor supports right now\n' +
    'blaze-html-templates@1.0.4    # Compile .html files into Meteor Blaze views\n' +
    'reactive-var@1.0.10            # Reactive variable for tracker\n' +
    'jquery@1.11.9                  # Helpful client-side library\n' +
    'tracker@1.1.0                 # Meteor\'s client-side reactive programming library\n\n' +
    'standard-minifier-css@1.1.8   # CSS minifier run for production mode\n' +
    'standard-minifier-js@1.1.8    # JS minifier run for production mode\n' +
    'es5-shim@4.6.13                # ECMAScript 5 compatibility for older browsers.\n' +
    'ecmascript@0.5.7              # Enable ECMAScript2015+ syntax in app code\n\n' +
    'autopublish@1.0.7             # Publish all data to the clients (for prototyping)\n' +
    'insecure@1.0.7                # Allow all DB writes from clients (for prototyping)\n';
  return output;
};
