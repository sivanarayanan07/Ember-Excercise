import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('swapping-pane', 'Integration | Component | swapping pane', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{swapping-pane}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#swapping-pane}}
      template block text
    {{/swapping-pane}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
