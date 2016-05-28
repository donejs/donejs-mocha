import 'steal-mocha';
import chai from 'chai';
import module from './<%= name %>';

let assert = chai.assert;

describe('<%= module %>', function(){
  it('Initialized the module', function(){
    assert.equal(typeof module, 'function');
    assert.equal(module(), 'This is the <%= name %> module');
  });
});
