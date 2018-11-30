import 'steal-mocha';
import chai from 'chai';
import <%= className %> from './<%= name %>';

let assert = chai.assert;

describe('models/<%= name %>', function() {
  it('getList', function(done){
    <%= className %>.getList().then(function(items) {
      assert.equal(items.length, 2);
      assert.equal(items.attr('0.description'), 'First item');
      done();
    });
  });
});
