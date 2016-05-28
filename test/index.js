var path = require('path');
var helpers = require('yeoman-test');
var assert = require('yeoman-assert');
var fs = require('fs');

describe('donejs-mocha', function() {
  before(function(done) {
    helpers.run(path.join(__dirname, '../default'))
      .inTmpDir(function() {
        fs.writeFileSync('package.json', JSON.stringify({name: 'foo'}), 'utf8');
      })
      .on('end', done);
  });

  it('should write test.html', function() {
    assert.file([path.join('src', 'test.html')]);
    assert.fileContent(path.join('src', 'test.html'), '<title>foo tests</title>');
    assert.fileContent(path.join('src', 'test.html'), '<script src="../node_modules/steal/steal.js" main="foo/test/" data-mocha="bdd"></script>');
  });

  it('should write test/functional.js', function() {
    assert.file([path.join('src', 'test', 'functional.js')]);
  });

  it('should write component test template', function() {
    assert.file([path.join('.donejs', 'templates', 'component', 'modlet', 'component_test.js')]);
  });

  it('should write module test template', function() {
    assert.file([path.join('.donejs', 'templates', 'module', 'module_test.js')]);
  });

  it('should write supermodel test template', function() {
    assert.file([path.join('.donejs', 'templates', 'supermodel', 'model_test.js')]);
  });

  it('should update package.json', function() {
    assert.file(['package.json']);
    assert.JSONFileContent('package.json', { system: { map: { chai: 'chai/chai' } } });
  });
});
