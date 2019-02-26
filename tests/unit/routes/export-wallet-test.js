import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | export-wallet', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:export-wallet');
    assert.ok(route);
  });
});
