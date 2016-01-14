var babel = require('babel-core');
var path = require('path');

exports.act = function(buffer, encoding, callback) {
    var options = this.options();
    var code = buffer.toString();
    var bone = this.bone;
    var source = this.source;

    options.filename = path.basename(source);

    try {
        var result = babel.transform(code, options);
    } catch(e) {
        bone.log.warn(e);
        return callback(null ,buffer);
    }

    this.cacheable();

    callback(null, result.code);
};

exports.filter = {
    ext: ['.js', '.jsx']
};