import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('exercise-5/infinite-scroll', 'Integration | Component | exercise 5/infinite scroll', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{exercise-5/infinite-scroll}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#exercise-5/infinite-scroll}}
      template block text
    {{/exercise-5/infinite-scroll}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
