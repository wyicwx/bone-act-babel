var bone = require('bone');
var babel = bone.require('../../');

var dist = bone.dest('dist').cwd('~/');

dist.src('./es6.js')
    .act(babel({
        "presets": ["es2015"]
    }));

dist.src('./react.jsx')
    .act(babel({
        "presets": ["es2015", "react"],
        "plugins": [
            "transform-react-jsx"
        ]
    }))
    .rename({
        ext: '.js'
    });

