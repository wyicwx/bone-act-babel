var babel = require('babel-core');

exports.act = function(buffer, encoding, callback) {
    var options = this.options();
    var code = buffer.toString();

    var result = babel.transform(code, options);

    this.cacheable();

    callback(null, result.code);
};

exports.filter = {
    ext: ['.js', '.jsx']
};