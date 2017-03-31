var Generator = require('yeoman-generator');
var path = require('path');
var fs = require('fs');
var _ = require('lodash');

module.exports = Generator.extend({
  initializing: function () {
    this.pkg = this.fs.readJSON(this.destinationPath('package.json'), {});
  },

  installingStealMocha: function() {
    this.npmInstall(['steal-mocha'], { 'saveDev': true });
  },

  installingAssert: function() {
    this.npmInstall(['chai'], { 'saveDev': true });
  },

  writing: function () {
    var templateDestination = this.destinationPath(path.join('.donejs', 'templates'));
    var srcDestination = this.destinationPath('src');
    var htmlDestination = this.destinationPath('./');

    this.log('Copying test.html to ' + htmlDestination);

    this.fs.copyTpl(
      this.templatePath('html/'),
      htmlDestination,
      this.pkg
    );

    this.log('Copying template files to ' + templateDestination);

    this.fs.copy(
      this.templatePath('static/'),
      templateDestination
    );

    this.log('Copying src files to ' + srcDestination);

    this.fs.copyTpl(
      this.templatePath('src/'),
      srcDestination,
      this.pkg
    );

    // update package.json
    var packageJson = this.destinationPath('package.json');
    var packageJsonContent =fs.readFileSync(packageJson, 'utf8');
    var json = packageJsonContent && JSON.parse(packageJsonContent) || {};
    json.steal = json.steal || {};
    json.steal.map = _.assign({}, json.steal.map, {
      chai: 'chai/chai'
    });
    fs.writeFileSync(packageJson, JSON.stringify(json));
  }
});
