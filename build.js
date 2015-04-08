var fs = require('fs');
var path = require('path');
var cssnext = require('cssnext');
var pkg = require('./node_modules/basscss/package.json');

compile = function() {
  var meta = [
      '/*\n',
       '    Basscss v' + pkg.version,
       '    ' + pkg.description,
       '    http://basscss.com',
       '\n*/'
    ].join('\n');
  var dir = path.join(__dirname, '/node_modules/basscss/');
  var dest = path.join(__dirname, '/client/');

  var src = fs.readFileSync(dir + 'src/basscss.css', 'utf8');

  var css = cssnext(src,
    { features: { rem: false },
      import: { path: dir + 'node_modules/' } } );

  fs.writeFileSync(dest + 'basscss.css', css);
  console.log('Compiled to client/basscss.css');

};

compile();