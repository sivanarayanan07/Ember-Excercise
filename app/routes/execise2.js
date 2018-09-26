import Ember from 'ember';

export default Ember.Route.extend({
  pane: Ember.inject.service('swapping-pane'),
  model() {
    return this.get('pane').getAll();
  }
});
