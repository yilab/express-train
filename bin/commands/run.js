var path = require('path');

module.exports = function (program) {
    var cmd = program.command('run')
        .usage("runs the express train application");

    cmd.action(function () {
        var appPath = path.join(process.cwd(), '/app/index.js');

        require(appPath).start();
    });

}
