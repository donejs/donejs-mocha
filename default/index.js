var generator = require('yeoman-generator');
var path = require('path');

module.exports = generator.Base.extend({
  initializing: function () {
    this.pkg = this.fs.readJSON(this.destinationPath('package.json'), {});
  },

  installingStealMocha: function() {
    this.npmInstall(['steal-mocha'], { 'saveDev': true });
  },

  installingAssert: function() {
    this.npmInstall(['assert'], { 'saveDev': true });
  },

  writing: function () {
    var templateDestination = this.destinationPath(path.join('.donejs', 'templates'));
    var srcDestination = this.destinationPath('src');

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
  }
});
