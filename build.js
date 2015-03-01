var basswork = require('basswork');
var fs = require('fs');

var srcDir = './node_modules/basscss/src/';

var src = fs.readFileSync(
  srcDir + 'basscss.css', 'utf8'
  );
var css = basswork(src, { source: srcDir });
fs.writeFileSync('./client/basscss.css', css);