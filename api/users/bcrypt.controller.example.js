var bluebird = require('bluebird'),   
    bcrypt = bluebird.promisifyAll(require('crypto'));

function (data) {
    return bcrypt.genSaltAsync(10).then(function(result) {
        return bcrypt.hashAsync(data.password, result, null);
    });
}