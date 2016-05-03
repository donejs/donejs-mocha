import 'steal-mocha';
import assert from 'assert';
import <%= className %> from './<%= name %>';

describe('models/<%= name %>', function() {
  it('getList', function(done){
    <%= className %>.getList().then(function(items) {
      assert.equal(items.length, 2);
      assert.equal(items.attr('0.description'), 'First item');
      done();
    });
  });
});
