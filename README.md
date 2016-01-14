# bone-act-babel
> babel for bone plugins

[![NPM version](https://img.shields.io/npm/v/bone-act-babel.svg?style=flat)](https://npmjs.org/package/bone-act-babel) [![NPM version](https://img.shields.io/npm/dm/bone-act-babel.svg?style=flat)](https://npmjs.org/package/bone-act-babel) [![travis](https://api.travis-ci.org/wyicwx/bone-act-babel.png)](https://travis-ci.org/wyicwx/bone-act-babel)

### 安装及使用

通过npm安装

```sh
$ npm install bone-act-babel 
```

安装后在`bonefile.js`文件内通过`act()`加载

```js
var bone = require('bone');
var babel = bone.require('bone-act-babel');

bone.dest('dist')
    .src('~/src/react.jsx')
    .act(babel({
        "presets": ["es2015", "react"],
        "plugins": [
            "transform-react-jsx"
        ]
    }))
    .rename({
        ext: '.js'
    });
```

*ps:* 示例中使用了`babel-preset-es2015`、`babel-preset-react`、`babel-plugin-transform-react-jsx`，需要另外安装

### filter

默认设置只针对源文件后缀为`.js`和`.jsx`文件进行处理

### 其他

处理器开发以及使用请参考[处理器](https://github.com/wyicwx/bone/blob/master/docs/plugin.md)