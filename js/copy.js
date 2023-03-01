var fs = require('fs');

var path = require('path');

function resolve(dir) {

return path.join(__dirname, '..', dir)

}

//origin要打包的css文件路径；target打包后的css文件路径

var qurConfig = {

name: 'scBtn.css',

origin: resolve('/jquery.fancybox-1.3.4.css'),
origin: resolve('/prettyPhoto.css'),
origin: resolve('/reset.css'),
origin: resolve('/reset.css'),

target: resolve('/dist/static/css/scBtn.css')

};

function copy(obj) {

fs.createReadStream(obj.origin).pipe(fs.createWriteStream(obj.target));

console.log('\x1B[32m%s\x1B[39m', '复制成功--------' + obj.name);

}

copy(qurConfig);