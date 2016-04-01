import 'steal-mocha';
import assert from 'assert';
import module from './<%= name %>';

describe('<%= module %>', () => {
  it('Initialized the module', function() {
    assert.equal(typeof module, 'function');
    assert.equal(module(), 'This is the <%= name %> module');
  });
});
