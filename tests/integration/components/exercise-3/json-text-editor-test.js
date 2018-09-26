import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('exercise-3/json-text-editor', 'Integration | Component | exercise 3/json text editor', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{exercise-3/json-text-editor}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#exercise-3/json-text-editor}}
      template block text
    {{/exercise-3/json-text-editor}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
