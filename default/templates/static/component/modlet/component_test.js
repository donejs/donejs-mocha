import 'steal-mocha';
import assert from 'assert';
import { ViewModel } from './<%= name %>';

// ViewModel unit tests
describe('<%= module %>', () => {
  it('Has message', function() {
    var vm = new ViewModel();
    assert.equal(vm.attr('message'), 'This is the <%= tag %> component');
  });
});
