var generator = require('yeoman-generator');
var path = require('path');

module.exports = generator.Base.extend({
  initializing: function () {
    this.pkg = this.fs.readJSON(this.destinationPath('package.json'), {});
  },
  
  writing: function () {
    var destination = this.destinationPath(path.join('.donejs', 'templates'));

    this.log('Copying template files to ' + destination);

    this.fs.copy(
      this.templatePath('static/'),
      destination
    );
  }
});
