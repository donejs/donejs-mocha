# donejs-mocha

[![Greenkeeper badge](https://badges.greenkeeper.io/donejs/donejs-mocha.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/donejs/donejs-mocha.svg?branch=master)](https://travis-ci.org/donejs/donejs-mocha)
[![npm version](https://badge.fury.io/js/donejs-mocha.svg)](http://badge.fury.io/js/donejs-mocha)

Use Mocha as the testing framework for DoneJS

From within a DoneJS application directory:
```
donejs add mocha
```

This will modify the templates used by the donejs component, module, and supermodel generators so that their tests will use Mocha. It will also overwrite `src/test.html` and `src/test/functional.js` to use Mocha. It will _not_ overwrite test files of existing components, modules, or supermodels. It is recommended that you add mocha when you first create a donejs project.
