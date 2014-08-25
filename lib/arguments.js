var optimist = require('optimist');

var optimistOptions = {
    sourceFiles: {
        alias: 'f',
        description: 'Glob expression to select spec files.'
    },
    serverPort: {
        alias: 'p',
        description: 'Specifies the port to be listened by Drakov server',
        default: 3000
    },
    staticPaths: {
        alias: 's',
        description: 'A list of comma delimited paths to use for static file proxying'
    }
};

exports.getArgv = function() {
    return optimist
        .usage('Usage: \n  ./drakov -f <path to blueprint> [-p <server port|3000>]' +
        '\n\nExample: \n  ' + './drakov -f ./*.md -p 3000')
        .options(optimistOptions)
        .demand('f')
        .wrap(80)
        .argv;
};