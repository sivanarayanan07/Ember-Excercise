import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('exercise-4/auto-complete-field', 'Integration | Component | exercise 4/auto complete field', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{exercise-4/auto-complete-field}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#exercise-4/auto-complete-field}}
      template block text
    {{/exercise-4/auto-complete-field}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
