import F from 'funcunit';
import mocha from 'steal-mocha';

F.attach(mocha);

describe('<%= name %> functional smoke test', function(){
  beforeEach(function(){
    F.open('../development.html');
  });

  it('<%= name %> main page shows up', function(){
    F('title').text('<%= name %>', 'Title is set');
  });
});

